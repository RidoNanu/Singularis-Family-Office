import type { ReactNode } from 'react';

type StoryBlockProps = {
  children?: ReactNode;
};

export function StoryBlock({ children }: StoryBlockProps) {
  return children ?? null;
}