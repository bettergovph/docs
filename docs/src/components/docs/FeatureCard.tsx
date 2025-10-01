'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  status?: 'available' | 'coming-soon' | 'beta';
  tags?: string[];
  href?: string;
  className?: string;
  children?: React.ReactNode;
}



export function FeatureCard({
  title,
  description,
  icon,
  image,
  imageAlt,
  status,
  tags = [],
  href,
  className,
  children
}: FeatureCardProps) {
  const CardComponent = href ? 'a' : 'div';
  const cardProps = href ? { 
    href, 
    target: '_blank', 
    rel: 'noopener noreferrer',
    'aria-label': `${title} - ${description}${href.includes('http') ? ' (opens in new tab)' : ''}`
  } : {};

  return (
    <CardComponent
      {...cardProps}
      className={cn(
        'group relative overflow-hidden rounded-lg border border-border bg-card text-card-foreground transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        href && 'hover:shadow-lg hover:border-primary/50 cursor-pointer',
        className
      )}
      role={href ? 'link' : 'article'}
    >
      {/* Image */}
      {image && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={imageAlt || title}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            {icon && (
              <div 
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary"
                aria-hidden="true"
              >
                {icon}
              </div>
            )}
            <div>
              <h3 className="font-semibold text-lg leading-tight" id={`feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        {status && (
          <div className="mb-3">
            <span className={cn(
              "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
              status === 'available' && "bg-green-100 text-green-800",
              status === 'coming-soon' && "bg-yellow-100 text-yellow-800",
              status === 'beta' && "bg-blue-100 text-blue-800"
            )}>
              {status === 'coming-soon' ? 'Coming Soon' : status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}



        {/* Children content */}
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}

        {/* Link indicator */}
        {href && (
          <div className="flex items-center text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
            <span>Learn more</span>
            <ArrowRightIcon 
              className="h-4 w-4 transition-transform group-hover:translate-x-1" 
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </CardComponent>
  );
}

// Grid container for multiple feature cards
interface FeatureGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({ 
  children, 
  columns = 3, 
  className 
}: FeatureGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div 
      className={cn(
        'grid gap-6',
        gridCols[columns],
        className
      )}
      role="grid"
      aria-label="Feature cards"
    >
      {children}
    </div>
  );
}

// Arrow icon component
function ArrowRightIcon({ className }: { className?: string }) {
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
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}