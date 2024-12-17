import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Loading from '@/components/Loading';

import { LayoutContainer } from './style';

const Layout = () => {
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
