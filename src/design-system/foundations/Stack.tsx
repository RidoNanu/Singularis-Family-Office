import type { ReactNode } from 'react';

type StackProps = {
  children?: ReactNode;
};

export function Stack({ children }: StackProps) {
  return children ?? null;
}