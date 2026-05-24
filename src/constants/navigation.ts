import { routePaths } from '../routes/routePaths';

export const navigationItems = [
  { label: 'Home', path: routePaths.home },
  { label: 'About Us', path: routePaths.about },
  { label: 'Services', path: routePaths.services },
] as const;