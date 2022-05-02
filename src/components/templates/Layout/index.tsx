import React, { ReactNode } from 'react';

import Sidebar from 'components/organisms/Sidebar';
import Header from 'components/organisms/Header';
import Player from 'components/organisms/Player';

import * as S from './styles';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <S.BasicLayout>
      <Sidebar />
      <Header />
      <Player />
      {children}
    </S.BasicLayout>
  );
};

export default Layout;
