'use client';

import { useControllableState } from '@radix-ui/react-use-controllable-state';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Heart, X, Menu } from 'lucide-react';

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;

  // TODO:
  theme: string;
  onToggleTheme: () => void;
  mobileMenuOpen: boolean;
  onMobileMenuOpenChange: (open: boolean) => void;
  activeSection: string;
  onActiveSectionChange: (section: string) => void;
}

export const Header = React.forwardRef<
  React.ComponentRef<'header'>,
  HeaderProps
>(
  (
    {
      open: openProp,
      defaultOpen,
      onOpenChange,
      theme,
      onToggleTheme,
      mobileMenuOpen,
      onMobileMenuOpenChange,
      activeSection,
      onActiveSectionChange,
    },
    ref
  ) => {
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
    });

    const navigationItems = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ];

    return (
      <header className="mb-12 flex items-center justify-between sm:mb-16">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400">
          <Heart className="h-5 w-5 text-black" />
        </div>

        <div className="hidden items-center gap-6 sm:flex">
          {navigationItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => onActiveSectionChange(id)}
              className={cn(
                'font-medium transition-colors',
                activeSection === id
                  ? theme === 'dark'
                    ? 'font-semibold text-white'
                    : 'font-semibold text-gray-900'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
              )}
            >
              {label}
            </button>
          ))}
          <Button
            onClick={onToggleTheme}
            className={cn(
              'mr-2 rounded-full p-2',
              theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            )}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </Button>
          <Button
            onClick={() => {}}
            className="rounded-full bg-yellow-400 px-6 font-semibold text-black hover:bg-yellow-500"
          >
            Download CV
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          onClick={() => onMobileMenuOpenChange(!mobileMenuOpen)}
          className="rounded-full bg-yellow-400 p-2 text-black hover:bg-yellow-500 sm:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </header>
    );
  }
);
Header.displayName = 'Header';
