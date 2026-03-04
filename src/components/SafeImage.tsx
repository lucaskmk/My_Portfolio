import React, { useState } from 'react';
import { Loader2, ImageOff } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackIcon?: React.ReactNode;
}

export const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  className, 
  fallbackIcon,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-neutral-900/20 ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-5 h-5 border-2 border-neutral-800 border-t-neutral-500 rounded-full animate-spin" />
        </div>
      )}
      
      {hasError ? (
        <div className="flex flex-col items-center justify-center gap-2 text-neutral-700">
          <Loader2 className="w-5 h-5 animate-pulse" />
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-50">Not Found</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-700 ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          referrerPolicy="no-referrer"
          {...props}
        />
      )}
    </div>
  );
};
