import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Loading from '@/components/Loading';

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
