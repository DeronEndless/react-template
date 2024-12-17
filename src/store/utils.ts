import { create as _create } from 'zustand';
import type { StateCreator } from 'zustand';
import { DevtoolsOptions, devtools as _devtools } from 'zustand/middleware';

/**
 * 文档: {@link https://docs.pmnd.rs/zustand/guides/how-to-reset-state}
 */
const storeResetFns = new Set<() => void>();

/**
 * 初始化store
 */
export const resetAllStores = () => {
  storeResetFns.forEach((resetFn) => {
    resetFn();
  });
};

/**
 * 创建store，重写create方法，添加resetAllStores
 */
export const create = (<T>() => {
  return (stateCreator: StateCreator<T>) => {
    const store = _create(stateCreator);
    const initialState = store.getState();

    storeResetFns.add(() => {
      store.setState(initialState, true);
    });

    return store;
  };
}) as typeof _create;

const isDevelopment = !!import.meta.env.DEV;

/**
 * 封装 devtools 中间件，使其在生产环境中无效，并支持传递其他参数
 */
export const devtools = <T extends object>(
  fn: StateCreator<T>,
  options?: Omit<DevtoolsOptions, 'enabled'>,
) => _devtools(fn, { ...options, enabled: isDevelopment });
