'use client';

import { useControllableState } from '@radix-ui/react-use-controllable-state';
import * as React from 'react';

import { Header } from '@/components/layout/header';
import { cn } from '@/lib/utils';

const AppShellContext = React.createContext<
  Required<Pick<AppShellProps, 'open' | 'onOpenChange'>>
>({
  open: false,
  onOpenChange: () => {},
});

const useAppShellContext = () => React.useContext(AppShellContext);

interface AppShellProps extends React.ComponentPropsWithoutRef<'div'> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const AppShell = React.forwardRef<
  React.ComponentRef<typeof AppShellContext.Provider>,
  AppShellProps
>(({ open: openProp, defaultOpen, onOpenChange, ...props }, ref) => {
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
  });

  return (
    <AppShellContext.Provider value={{ open, onOpenChange: setOpen }}>
      <div ref={ref} {...props} />
    </AppShellContext.Provider>
  );
});
AppShell.displayName = 'AppShell';

export const AppShellHeader = React.forwardRef<
  React.ComponentRef<typeof Header>,
  React.ComponentPropsWithoutRef<typeof Header>
>((props, ref) => {
  const { open, onOpenChange } = useAppShellContext();

  return (
    <Header ref={ref} open={open} onOpenChange={onOpenChange} {...props} />
  );
});
AppShellHeader.displayName = 'AppShellHeader';

export const AppShellContent = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex', className)} {...props} />
));
AppShellContent.displayName = 'AppShellContent';

export const AppShellMain = React.forwardRef<
  React.ComponentRef<'main'>,
  React.ComponentPropsWithoutRef<'main'>
>(({ className, ...props }, ref) => (
  <main ref={ref} className={cn('flex-1', className)} {...props} />
));
AppShellMain.displayName = 'AppShellMain';
