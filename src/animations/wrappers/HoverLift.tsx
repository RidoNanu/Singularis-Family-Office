import type { ReactNode } from 'react';

type HoverLiftProps = {
  children?: ReactNode;
};

export function HoverLift({ children }: HoverLiftProps) {
  return children ?? null;
}