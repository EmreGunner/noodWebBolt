import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, className = '', sizes = '100vw' }) => {
  const generateSrcSet = (baseSrc: string) => {
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths.map(width => `${baseSrc}?w=${width} ${width}w`).join(', ');
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto ${className}`}
      srcSet={generateSrcSet(src)}
      sizes={sizes}
      loading="lazy"
    />
  );
};

export default ResponsiveImage;
