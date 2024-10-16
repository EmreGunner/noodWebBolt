import React from 'react';

interface BrandedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BrandedImage: React.FC<BrandedImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-primary bg-opacity-20 transition-opacity duration-300 opacity-0 hover:opacity-100"></div>
    </div>
  );
};

export default BrandedImage;
