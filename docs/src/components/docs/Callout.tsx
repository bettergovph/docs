'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type CalloutType = 'info' | 'warning' | 'danger' | 'success' | 'tip' | 'note';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const calloutConfig = {
  info: {
    icon: InfoIcon,
    className: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100',
    iconClassName: 'text-blue-600 dark:text-blue-400',
    titleClassName: 'text-blue-900 dark:text-blue-100'
  },
  warning: {
    icon: WarningIcon,
    className: 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100',
    iconClassName: 'text-amber-600 dark:text-amber-400',
    titleClassName: 'text-amber-900 dark:text-amber-100'
  },
  danger: {
    icon: DangerIcon,
    className: 'border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100',
    iconClassName: 'text-red-600 dark:text-red-400',
    titleClassName: 'text-red-900 dark:text-red-100'
  },
  success: {
    icon: SuccessIcon,
    className: 'border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100',
    iconClassName: 'text-green-600 dark:text-green-400',
    titleClassName: 'text-green-900 dark:text-green-100'
  },
  tip: {
    icon: TipIcon,
    className: 'border-purple-200 bg-purple-50 text-purple-900 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-100',
    iconClassName: 'text-purple-600 dark:text-purple-400',
    titleClassName: 'text-purple-900 dark:text-purple-100'
  },
  note: {
    icon: NoteIcon,
    className: 'border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100',
    iconClassName: 'text-gray-600 dark:text-gray-400',
    titleClassName: 'text-gray-900 dark:text-gray-100'
  }
};

const defaultTitles = {
  info: 'Info',
  warning: 'Warning',
  danger: 'Danger',
  success: 'Success',
  tip: 'Tip',
  note: 'Note'
};

export function Callout({
  type = 'info',
  title,
  children,
  icon,
  className
}: CalloutProps) {
  const config = calloutConfig[type];
  const IconComponent = config.icon;
  const displayTitle = title || defaultTitles[type];

  return (
    <div className={cn(
      'my-6 rounded-lg border p-4',
      config.className,
      className
    )}>
      <div className="flex gap-3">
        {/* Icon */}
        <div className={cn('flex-shrink-0 mt-0.5', config.iconClassName)}>
          {icon || <IconComponent className="h-5 w-5" />}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {displayTitle && (
            <h4 className={cn(
              'font-semibold text-sm mb-2',
              config.titleClassName
            )}>
              {displayTitle}
            </h4>
          )}
          <div className="text-sm leading-relaxed [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Convenience components for specific callout types
export function InfoCallout({ children, title, className }: Omit<CalloutProps, 'type'>) {
  return (
    <Callout type="info" title={title} className={className}>
      {children}
    </Callout>
  );
}

export function WarningCallout({ children, title, className }: Omit<CalloutProps, 'type'>) {
  return (
    <Callout type="warning" title={title} className={className}>
      {children}
    </Callout>
  );
}

export function DangerCallout({ children, title, className }: Omit<CalloutProps, 'type'>) {
  return (
    <Callout type="danger" title={title} className={className}>
      {children}
    </Callout>
  );
}

export function SuccessCallout({ children, title, className }: Omit<CalloutProps, 'type'>) {
  return (
    <Callout type="success" title={title} className={className}>
      {children}
    </Callout>
  );
}

export function TipCallout({ children, title, className }: Omit<CalloutProps, 'type'>) {
  return (
    <Callout type="tip" title={title} className={className}>
      {children}
    </Callout>
  );
}

export function NoteCallout({ children, title, className }: Omit<CalloutProps, 'type'>) {
  return (
    <Callout type="note" title={title} className={className}>
      {children}
    </Callout>
  );
}

// Icon components
function InfoIcon({ className }: { className?: string }) {
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
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function WarningIcon({ className }: { className?: string }) {
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
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  );
}

function DangerIcon({ className }: { className?: string }) {
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
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function SuccessIcon({ className }: { className?: string }) {
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
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function TipIcon({ className }: { className?: string }) {
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
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );
}

function NoteIcon({ className }: { className?: string }) {
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
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );
}