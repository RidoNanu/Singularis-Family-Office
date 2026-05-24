import type { ReactNode } from 'react';

type SurfaceProps = {
  children?: ReactNode;
};

export function Surface({ children }: SurfaceProps) {
  return children ?? null;
}