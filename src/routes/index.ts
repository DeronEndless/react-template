import { RouteObject, createBrowserRouter } from 'react-router';

import { routeConfig } from './config';
import { RouteConfig } from './types';

const formatMenuToRoutes = (routeConfig: RouteConfig[]): RouteObject[] => {
  const routes: RouteObject[] = [];

  routeConfig.forEach((item) => {
    const route: RouteObject = {
      index: item.index,
    };

    if (item.path) {
      route.path = item.path;
    }

    if (item.Component) {
      route.Component = item.Component;
    }

    if (item.children) {
      route.children = formatMenuToRoutes(item.children);
    }
    routes.push(route);
  });

  return routes;
};

const routes = formatMenuToRoutes(routeConfig);
const router = createBrowserRouter(routes);

export default router;
