import React from 'react';
import Link from 'next/link';

import SpotifyLogo from 'components/atoms/SpotifyLogo';
import SidebarItem from 'components/molecules/SidebarItem';

import * as S from './styles';

type PlaylistData = {
  id: string;
  name: string;
};

type Props = {
  data: Array<PlaylistData>;
};

const Desktop = ({ data }: Props) => {
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
      icon: 'liked-songs',
    },
  ];

  return (
    <S.DesktopSidebar>
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
            name={item.icon}
          />
        ))}
      </S.Items>
      <S.Playlists>
        {data.map(playlist => (
          <S.PlaylistItem key={playlist.id}>
            <Link href={`/playlist/${playlist.id}`} passHref>
              <S.PlaylistItemLink>{playlist.name}</S.PlaylistItemLink>
            </Link>
          </S.PlaylistItem>
        ))}
      </S.Playlists>
    </S.DesktopSidebar>
  );
};

export default Desktop;
