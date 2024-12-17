import { ComponentType } from 'react';

export type RouteConfig = {
  /**页面路径 */
  path?: string;
  /**图标 */
  icon?: string;
  /**是否是首页 */
  index?: boolean;
  /**名称 */
  title?: string;
  /**组件 */
  Component?: ComponentType;
  /**子路由 */
  children?: RouteConfig[];
};
