import type { ReactNode } from 'react';

type StaggerGroupProps = {
  children?: ReactNode;
};

export function StaggerGroup({ children }: StaggerGroupProps) {
  return children ?? null;
}