import type { ReactNode } from 'react';

type SectionHeadingProps = {
  children?: ReactNode;
};

export function SectionHeading({ children }: SectionHeadingProps) {
  return children ?? null;
}