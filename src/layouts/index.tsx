import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router';

import { App } from 'antd';

import Loading from '@/components/Loading';
import useAntdApp from '@/store/useAntdApp';

import { LayoutContainer } from './style';

const Layout = () => {
  const antdStaticFunction = App.useApp();
  const updateAntdStaticFunctions = useAntdApp((state) => state.updateAntdStaticFunctions);

  // 设置全局 antd app 静态方法
  useEffect(() => {
    updateAntdStaticFunctions({
      message: antdStaticFunction.message,
      notification: antdStaticFunction.notification,
      modal: antdStaticFunction.modal,
    });
  }, [antdStaticFunction, updateAntdStaticFunctions]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <LayoutContainer vertical>
          <Outlet />
        </LayoutContainer>
      </Suspense>
    </>
  );
};

export default Layout;
