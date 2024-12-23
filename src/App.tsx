import { RouterProvider } from 'react-router';

import { App as AntdApp, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import router from '@/routes';

function App() {
  return (
    <>
      <ConfigProvider
        locale={zhCN}
        theme={{
          cssVar: true,
          hashed: false,
          token: {
            // Seed Token
            colorPrimary: '#00b96b',

            // Map Token
            // colorBorder: '#d9d9d9',
          },
        }}
      >
        <AntdApp>
          <RouterProvider router={router} />
        </AntdApp>
      </ConfigProvider>
    </>
  );
}

export default App;
