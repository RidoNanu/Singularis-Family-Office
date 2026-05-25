import type { ReactNode } from 'react';
import { AppFooter } from '../AppFooter/AppFooter';
import { AppHeader } from '../AppHeader/AppHeader';
import { PageShell } from '../PageShell/PageShell';

type MainLayoutProps = {
  children: ReactNode;
  hideFooter?: boolean;
};

export function MainLayout({ children, hideFooter = false }: MainLayoutProps) {
  return (
    <PageShell>
      <AppHeader />
      {children}
      {!hideFooter && <AppFooter />}
    </PageShell>
  );
}