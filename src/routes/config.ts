import { lazy } from 'react';

import NoMatch from './components/NoMatch';
import Redirect from './components/Redirect';
import { RouteConfig } from './types';

const Layout = lazy(() => import('@/layouts'));

// 一级路由
const Home = lazy(() => import('@/pages/home'));
const Login = lazy(() => import('@/pages/login'));

export const LoginRoute = {
  path: '/login',
  Component: Login,
};

export const RootRoute = {
  path: '/',
  Component: Layout,
};

export const IndexRoute = {
  index: true,
  Component: Redirect,
};

export const NoMatchRoute = {
  path: '*',
  Component: NoMatch,
};

export const ChildrenRoute = [
  {
    title: 'menu.home',
    icon: 'icon-home',
    path: 'home',
    Component: Home,
  },
  {
    title: 'menu.login',
    icon: 'icon-login',
    path: 'login',
    Component: Login,
  },
];

export const routeConfig: RouteConfig[] = [
  { ...LoginRoute },
  {
    ...RootRoute,
    children: [IndexRoute, NoMatchRoute, ...ChildrenRoute],
  },
];
