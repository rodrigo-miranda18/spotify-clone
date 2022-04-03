import React from 'react';

import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { GlobalStyle } from 'styles/global';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default MyApp;
