
import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  schema?: object;
  image?: string;
  type?: string;
  noIndex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({ 
    title, 
    description, 
    schema, 
    image = "https://www.triaina.fr/og-image.jpg",
    type = "website",
    noIndex = false 
}) => {
  useEffect(() => {
    // 1. Title Management
    if (title) {
      document.title = `${title} | Triaina`;
    }

    // Helper to update or create meta tags
    const updateMeta = (selector: string, content: string) => {
        let element = document.querySelector(selector);
        if (!element) {
            // If tag doesn't exist (shouldn't happen with index.html properly set), create it
            element = document.createElement('meta');
            // Parse selector to set attributes (basic parsing)
            if (selector.includes('name=')) element.setAttribute('name', selector.split('name="')[1].split('"')[0]);
            if (selector.includes('property=')) element.setAttribute('property', selector.split('property="')[1].split('"')[0]);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags (Google uses 'name')
    if (description) updateMeta('meta[name="description"]', description);

    // 3. Open Graph (Facebook/Linkedin uses 'property')
    if (title) updateMeta('meta[property="og:title"]', title);
    if (description) updateMeta('meta[property="og:description"]', description);
    if (image) updateMeta('meta[property="og:image"]', image);
    updateMeta('meta[property="og:type"]', type);
    
    const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    updateMeta('meta[property="og:url"]', cleanUrl);

    // 4. Twitter Cards (Twitter uses 'name')
    if (title) updateMeta('meta[name="twitter:title"]', title);
    if (description) updateMeta('meta[name="twitter:description"]', description);
    if (image) updateMeta('meta[name="twitter:image"]', image);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', cleanUrl);

    // 6. Robots Tag (NoIndex handling)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noIndex) {
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.setAttribute('name', 'robots');
            document.head.appendChild(metaRobots);
        }
        metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
        // Restore default if it was set to noindex previously
        if (metaRobots) {
             metaRobots.setAttribute('content', 'index, follow');
        }
    }

    // 7. JSON-LD Schema Injection (Critical for Google)
    if (schema) {
      // Remove any existing dynamic schema to prevent duplicates
      const existingScripts = document.querySelectorAll('script[data-generated="seo"]');
      existingScripts.forEach(s => s.remove());

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-generated', 'seo'); // Mark for cleanup
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    // Cleanup function not strictly necessary for meta tags as they are overwritten,
    // but useful for schema if component unmounts.
    return () => {
        // Optional: Clean specific schema scripts on unmount if needed
    };
  }, [title, description, schema, image, type, noIndex]);

  return null;
};
