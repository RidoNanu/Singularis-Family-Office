import type { ReactNode } from 'react';
import { AppFooter } from '../AppFooter/AppFooter';
import { AppHeader } from '../AppHeader/AppHeader';
import { PageShell } from '../PageShell/PageShell';

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <PageShell>
      <AppHeader />
      {children}
      <AppFooter />
    </PageShell>
  );
}