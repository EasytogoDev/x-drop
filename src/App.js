import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';
import React, { useEffect, useState, lazy } from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import ProtectedRoute from './components/utilities/protectedRoute';
import config from './config/config';
import store from './redux/store';

import Admin from './routes/admin';
import Auth from './routes/auth';
import './static/css/style.css';

const NotFound = lazy(() => import('./container/pages/404'));

const { themeColor } = config;

function ProviderConfig() {
  const { rtl, isLoggedIn, topMenu, mainContent } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
      mainContent: state.ChangeLayoutMode.mode,
      isLoggedIn: state.auth.login,
    };
  });

  const [path, setPath] = useState(window.location.pathname);

  const location = useLocation(); // Hook para obter a localização

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    const shopid = searchParams.get('shop_id');

    if (code && shopid) {
      // Armazena no localStorage
      localStorage.setItem('CodeShopee', code);
      localStorage.setItem('IdShopee', shopid);
    }

    // Chame essa função após o login ou quando o token JWT estiver disponível
    sendTokenToReactNative();

    setPath(window.location.pathname);
  }, [location]);

  // Função para enviar o token JWT para o React Native
  function sendTokenToReactNative() {
    const jwtToken = localStorage.getItem('access_token'); // Captura o token do localStorage
    if (jwtToken && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({ token: jwtToken })); // Envia o token para o React Native
    }
  }

  return (
    <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={{ ...themeColor, rtl, topMenu, mainContent }}>
        <>
          {!isLoggedIn ? (
            <Routes>
              <Route path="/*" element={<Auth />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/*" element={<ProtectedRoute path="/*" Component={Admin} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
          {isLoggedIn && (path === process.env.PUBLIC_URL || path === `${process.env.PUBLIC_URL}/`) && (
            <Routes>
              <Route path="/" element={<Navigate to="/" />} />
            </Routes>
          )}
        </>
      </ThemeProvider>
    </ConfigProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <ProviderConfig />
      </Router>
    </Provider>
  );
}

export default App;
