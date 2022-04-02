import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import React from 'react';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
