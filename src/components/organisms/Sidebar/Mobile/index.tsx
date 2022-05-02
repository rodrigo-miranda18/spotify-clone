import React from 'react';

import SidebarItem from 'components/molecules/SidebarItem';

import * as S from './styles';

const Mobile = () => {
  const items = [
    {
      id: 1,
      text: 'Início',
      link: '/',
      icon: 'home',
    },
    {
      id: 2,
      text: 'Buscar',
      link: '/search',
      icon: 'search',
    },
    {
      id: 3,
      text: 'Sua Biblioteca',
      link: '/collection/playlists',
      icon: 'library',
    },
    {
      id: 4,
      text: 'Baixar aplicativo',
      link: 'https://play.google.com/store/apps/details?id=com.spotify.music&hl=pt_BR&gl=US',
      icon: 'spotify',
    },
  ];

  return (
    <S.MobileSidebar>
      <S.Items>
        {items.map(item => (
          <SidebarItem
            key={item.id}
            text={item.text}
            link={item.link}
            name={item.icon}
          />
        ))}
      </S.Items>
    </S.MobileSidebar>
  );
};

export default Mobile;
