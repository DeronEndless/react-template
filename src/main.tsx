import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import 'normalize.css'; // 重置浏览器样式
import '@/assets/css/reset.css'; // 重置样式
import '@/assets/css/index.css'; // 全局样式

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
