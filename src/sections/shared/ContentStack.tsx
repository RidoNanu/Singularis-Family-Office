import type { ReactNode } from 'react';

type ContentStackProps = {
  children?: ReactNode;
};

export function ContentStack({ children }: ContentStackProps) {
  return children ?? null;
}