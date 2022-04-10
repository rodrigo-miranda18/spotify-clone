import React from 'react';
import Link from 'next/link';

import SpotifyLogo from 'components/atoms/SpotifyLogo';
import SidebarItem from 'components/molecules/SidebarItem';

import * as S from './styles';

const Sidebar = () => {
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
      text: 'Criar playlist',
      link: '',
      icon: 'create',
    },
    {
      id: 5,
      text: 'Músicas Curtidas',
      link: '',
      icon: 'heart',
    },
  ];

  return (
    <S.Sidebar>
      <Link href="/" passHref>
        <S.LogoLink>
          <SpotifyLogo color="white" width="130px" height="40px" />
        </S.LogoLink>
      </Link>
      <S.Items>
        {items.map(item => (
          <SidebarItem
            key={item.id}
            text={item.text}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </S.Items>
      <S.Playlists>
        <S.PlaylistItem>
          <Link href="/" passHref>
            <S.PlaylistItemLink>Rap Nacional e MPB</S.PlaylistItemLink>
          </Link>
        </S.PlaylistItem>
        <S.PlaylistItem>
          <Link href="/" passHref>
            <S.PlaylistItemLink>Rock(s)</S.PlaylistItemLink>
          </Link>
        </S.PlaylistItem>
      </S.Playlists>
    </S.Sidebar>
  );
};

export default Sidebar;
