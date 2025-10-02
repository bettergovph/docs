'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { navigationConfig, isActiveNavItem, type NavigationItem } from '@/lib/navigation';

interface NavigationProps {
  className?: string;
}

interface NavigationItemProps {
  item: NavigationItem;
  currentPath: string;
  level?: number;
}

/**
 * Navigation item component with active state handling
 */
function NavigationItemComponent({ item, currentPath, level = 0 }: NavigationItemProps) {
  const isActive = isActiveNavItem(item, currentPath);
  const hasChildren = item.children && item.children.length > 0;
  
  return (
    <div className={cn('navigation-item', level > 0 && 'ml-4')}>
      <Link
        href={item.href}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
          'hover:bg-muted hover:text-foreground',
          isActive
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground',
          level === 0 && 'font-semibold'
        )}
      >
        {item.icon && (
          <span className="w-4 h-4" aria-hidden="true">
            {/* Icon placeholder - can be replaced with actual icon component */}
            <div className="w-4 h-4 bg-current rounded opacity-60" />
          </span>
        )}
        <span>{item.title}</span>
      </Link>
      
      {hasChildren && (
        <div className={cn('mt-1 space-y-1', level === 0 && 'border-l-2 border-muted ml-2 pl-2')}>
          {item.children!.map((child) => (
            <NavigationItemComponent
              key={child.href}
              item={child}
              currentPath={currentPath}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Main navigation component
 * Renders the navigation structure with proper routing and active states
 */
export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();
  
  return (
    <nav className={cn('navigation', className)} role="navigation" aria-label="Main navigation">
      <div className="space-y-2">
        {navigationConfig.main.map((item) => (
          <NavigationItemComponent
            key={item.href}
            item={item}
            currentPath={pathname}
          />
        ))}
      </div>
    </nav>
  );
}

/**
 * Breadcrumb navigation component
 */
interface BreadcrumbProps {
  className?: string;
}

export function Breadcrumb({ className }: BreadcrumbProps) {
  const pathname = usePathname();
  
  // Simple breadcrumb logic - can be enhanced with the getBreadcrumbs function
  const segments = pathname.split('/').filter(Boolean);
  
  return (
    <nav className={cn('breadcrumb', className)} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          const isLast = index === segments.length - 1;
          
          return (
            <li key={href} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-foreground capitalize">
                  {segment.replace('-', ' ')}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-foreground transition-colors capitalize"
                >
                  {segment.replace('-', ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Mobile navigation toggle component
 */
interface MobileNavToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileNavToggle({ isOpen, onToggle }: MobileNavToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
      aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
      aria-expanded={isOpen}
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <span
          className={cn(
            'block w-5 h-0.5 bg-current transition-all duration-300',
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
          )}
        />
        <span
          className={cn(
            'block w-5 h-0.5 bg-current transition-all duration-300',
            isOpen ? 'opacity-0' : 'opacity-100'
          )}
        />
        <span
          className={cn(
            'block w-5 h-0.5 bg-current transition-all duration-300',
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
          )}
        />
      </div>
    </button>
  );
}