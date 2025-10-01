'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ScreenshotProps {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  width?: number;
  height?: number;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
  border?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  zoom?: boolean;
  className?: string;
}

const aspectRatios = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  auto: ''
};

export function Screenshot({
  src,
  alt,
  title,
  caption,
  width,
  height,
  aspectRatio = 'auto',
  border = true,
  shadow = true,
  rounded = true,
  zoom = false,
  className
}: ScreenshotProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleZoomToggle = () => {
    if (zoom) {
      setIsZoomed(!isZoomed);
    }
  };

  return (
    <figure className={cn('my-6', className)}>
      {title && (
        <h4 className="text-sm font-medium text-muted-foreground mb-3">
          {title}
        </h4>
      )}
      
      <div className={cn(
        'relative overflow-hidden bg-muted',
        aspectRatio !== 'auto' && aspectRatios[aspectRatio],
        border && 'border border-border',
        shadow && 'shadow-lg',
        rounded && 'rounded-lg',
        zoom && 'cursor-zoom-in'
      )}>
        {/* Loading state */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Error state */}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
            <ImageOffIcon className="h-12 w-12 mb-2" />
            <p className="text-sm">Failed to load image</p>
          </div>
        )}

        {/* Image */}
        {!hasError && (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            onLoad={handleImageLoad}
            onError={handleImageError}
            onClick={handleZoomToggle}
            className={cn(
              'w-full h-full object-cover transition-all duration-300',
              aspectRatio === 'auto' && 'h-auto',
              isLoading && 'opacity-0',
              zoom && 'hover:scale-105'
            )}
          />
        )}
      </div>

      {caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground text-center">
          {caption}
        </figcaption>
      )}

      {/* Zoom modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-full max-h-full">
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              title="Close"
            >
              <CloseIcon className="h-8 w-8" />
            </button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </figure>
  );
}

// Gallery component for multiple screenshots
interface ScreenshotGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ScreenshotGallery({ 
  images, 
  columns = 2, 
  className 
}: ScreenshotGalleryProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={cn(
      'grid gap-4 my-6',
      gridCols[columns],
      className
    )}>
      {images.map((image, index) => (
        <Screenshot
          key={index}
          src={image.src}
          alt={image.alt}
          caption={image.caption}
          zoom
          aspectRatio="video"
        />
      ))}
    </div>
  );
}

// Comparison component for before/after screenshots
interface ScreenshotComparisonProps {
  before: {
    src: string;
    alt: string;
    label?: string;
  };
  after: {
    src: string;
    alt: string;
    label?: string;
  };
  className?: string;
}

export function ScreenshotComparison({ 
  before, 
  after, 
  className 
}: ScreenshotComparisonProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-4 my-6', className)}>
      <div>
        {before.label && (
          <h4 className="text-sm font-medium text-muted-foreground mb-3">
            {before.label}
          </h4>
        )}
        <Screenshot
          src={before.src}
          alt={before.alt}
          zoom
          aspectRatio="video"
        />
      </div>
      <div>
        {after.label && (
          <h4 className="text-sm font-medium text-muted-foreground mb-3">
            {after.label}
          </h4>
        )}
        <Screenshot
          src={after.src}
          alt={after.alt}
          zoom
          aspectRatio="video"
        />
      </div>
    </div>
  );
}

// Icon components
function ImageOffIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}