import type { ReactElement } from 'react';
import { routePaths } from './routePaths';
import { HomePage } from '../pages/HomePage/HomePage';
import { AboutUsPage } from '../pages/AboutUsPage/AboutUsPage';
import { ServicesPage } from '../pages/ServicesPage/ServicesPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { MainLayout } from '../layouts/MainLayout/MainLayout';

export type RouteConfigItem = {
  path: string;
  element: ReactElement;
};

export const routeConfig: RouteConfigItem[] = [
  { path: routePaths.home, element: <MainLayout><HomePage /></MainLayout> },
  { path: routePaths.about, element: <MainLayout><AboutUsPage /></MainLayout> },
  { path: routePaths.services, element: <MainLayout><ServicesPage /></MainLayout> },
  { path: '*', element: <MainLayout><NotFoundPage /></MainLayout> },
];