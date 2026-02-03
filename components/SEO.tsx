
import React, { useEffect } from 'react';

interface SEOProps {
  schema: object;
}

export const SEO: React.FC<SEOProps> = ({ schema }) => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    
    // Append to head
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);

  return null;
};
