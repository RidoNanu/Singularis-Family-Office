import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routeConfig } from './routeConfig';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}