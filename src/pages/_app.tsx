import React, { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { HistoryProvider } from 'contexts/History';

import { GlobalStyle } from 'styles/global';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <GlobalStyle />
      <SessionProvider session={session}>
        <HistoryProvider>
          {getLayout(<Component {...pageProps} />)}
        </HistoryProvider>
      </SessionProvider>
    </>
  );
};

export default MyApp;
