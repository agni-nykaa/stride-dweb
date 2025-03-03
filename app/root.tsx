import { Global, css, ThemeProvider } from '@emotion/react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  ShouldRevalidateFunction,
  useLoaderData,
} from '@remix-run/react';
import { useEffect, useState } from 'react';
import { ACTION_ROUTES } from '~/actions';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import ThemeFactory from '~/factories/ThemeFactory';
import styles from '~/styles/index.css';
import { fetchConfig } from '~/utils/config';
import DefaultAuthState from '~/constants/context/auth';
import { AuthContext, ConfigContext } from './contexts';
import { useFetcherHandler } from './hooks/useFetcherHandler';
import { initializeDataLayer } from './utils/datalayer';
import { getAuthFromStorage, storeAuthInStorage } from './services/auth/helper';
import { logger } from './utils/logger';
import { transformAuthData } from './transformers/auth';
import { User } from './types/contexts/auth';

// Ensure environment variables are loaded
if (typeof process === 'undefined') {
  global.process = {
    env: {
      NODE_ENV: 'development',
    },
  };
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

// Create a context for the config

export const meta = () => ({
  charset: 'utf-8',
  viewport:
    'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no',
});

// Loader function to fetch config
export const loader = async () => {
  const config = await fetchConfig();
  return config;
};

export const shouldRevalidate: ShouldRevalidateFunction = () => false;

export default function App() {
  const GTM_ID = process.env.GTM_ID || '';
  const config = useLoaderData();
  const theme = ThemeFactory.initialize();
  const [authState, setAuthState] = useState(DefaultAuthState);
  const { fetcher } = useFetcherHandler({
    onSuccess: (data) => {
      storeAuthInStorage({
        data,
        status: 200,
        statusText: '',
      });
      const transformedReactConfig = transformAuthData(data?.result);
      const updatedAuthState = {
        ...authState,
        fetching: false,
        dataFetched: true,
        fetchedOverNetwork: true,
        user: {
          ...authState.user,
          ...transformedReactConfig,
        },
      };
      setAuthState(updatedAuthState);
    },
    onError: (error) => {
      console.error('Error fetching react config:', error);
    },
    successHandler: (data) => data.status || false,
  });

  const setUser = (user: User) => {
    setAuthState((prevAuthState) => ({
      ...prevAuthState,
      user: {
        ...prevAuthState.user,
        ...user,
      },
    }));
  };

  const handleUserSession = () => {
    const authDataInStorage = getAuthFromStorage();
    const { data: { result } = { result: null } } = authDataInStorage || {};
    if (result) {
      try {
        const transformedReactConfig = transformAuthData(result);
        const updatedAuthState = {
          ...authState,
          dataFetched: true,
          fetchedOverNetwork: false,
          user: {
            ...authState.user,
            ...transformedReactConfig,
          },
        };
        setAuthState(updatedAuthState);
      } catch (err) {
        logger.error('Error Transforming react config from storage');
      }
    } else {
      setAuthState({ ...authState, fetching: true });
      fetcher.load(ACTION_ROUTES.reactConfig);
    }
  };

  const authContextConfig = {
    ...authState,
    setUser,
  };

  useEffect(() => {
    handleUserSession();
    initializeDataLayer();
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {/* Add GTM script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        <link
          rel="icon"
          href="//images-static.naikaa.com/media/wysiwyg/uiTools/2024-3/beauty.png"
          type="image/x-icon"
        />
      </head>
      <body>
        {/* Add GTM noscript */}
        <noscript>
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
            }}
          />
        </noscript>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              body {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                  Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
                  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
                  'Noto Color Emoji';
              }
            `}
          />
          <ConfigContext.Provider value={config}>
            <AuthContext.Provider value={authContextConfig}>
              <Header />
              <Outlet />
              <Footer />
            </AuthContext.Provider>
          </ConfigContext.Provider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ThemeProvider>
      </body>
    </html>
  );
}
