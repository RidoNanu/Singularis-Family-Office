import type { ReactNode } from 'react';

type GridProps = {
  children?: ReactNode;
};

export function Grid({ children }: GridProps) {
  return children ?? null;
}