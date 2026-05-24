import type { ReactNode } from 'react';

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <div className={`relative min-h-screen overflow-x-clip bg-white text-[#1E3754] ${className}`}>
      {children}
    </div>
  );
}