
import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  schema?: object;
  image?: string; // Ajout support image spécifique
  type?: string;  // website ou article
  noIndex?: boolean; // NOUVEAU : Pour gérer les pages 404 ou privées
}

export const SEO: React.FC<SEOProps> = ({ 
    title, 
    description, 
    schema, 
    image = "https://www.triaina.fr/og-image.jpg", // Image par défaut
    type = "website",
    noIndex = false 
}) => {
  useEffect(() => {
    // 1. Update Standard Meta Tags
    if (title) {
      document.title = `${title} | Triaina`;
    }

    const updateMeta = (name: string, content: string, attribute: string = 'name') => {
        let element = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attribute, name);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    if (description) {
        updateMeta('description', description);
    }

    // 2. Update Open Graph (Social Media)
    if (title) updateMeta('og:title', title, 'property');
    if (description) updateMeta('og:description', description, 'property');
    if (image) updateMeta('og:image', image, 'property');
    updateMeta('og:type', type, 'property');
    
    // Update URL canonique pour OG aussi
    const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    updateMeta('og:url', cleanUrl, 'property');

    // 3. Update Twitter Card
    if (title) updateMeta('twitter:title', title);
    if (description) updateMeta('twitter:description', description);
    if (image) updateMeta('twitter:image', image);

    // 4. Update Canonical URL (SEO Technique)
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', cleanUrl);

    // 5. Manage Robots (NoIndex for 404)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noIndex) {
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.setAttribute('name', 'robots');
            document.head.appendChild(metaRobots);
        }
        metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
        // If explicitly set to index or default, we ensure we don't block
        // However, usually we just remove the noindex tag if it exists dynamically
        if (metaRobots && metaRobots.getAttribute('content') === 'noindex, nofollow') {
            metaRobots.remove();
        }
    }

    // 6. Inject JSON-LD Schema
    if (schema) {
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(s => {
          if (s.textContent?.includes(JSON.stringify(schema).substring(0, 20))) {
              s.remove();
          }
      });

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        try {
            document.head.removeChild(script);
        } catch (e) {
            // Ignore if already removed
        }
      };
    }
  }, [title, description, schema, image, type, noIndex]);

  return null;
};
