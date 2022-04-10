import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { api } from 'services/api';

import SpotifyLogo from 'components/atoms/SpotifyLogo';
import SidebarItem from 'components/molecules/SidebarItem';

import * as S from './styles';

const Sidebar = () => {
  const [playlists, setPlaylists] = useState([]);

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

  useEffect(() => {
    (async () => {
      const { status, data } = await api.get('/api/playlists');

      if (status === 200) {
        setPlaylists(data.items);
      }
    })();
  }, []);

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
        {playlists.map(playlist => (
          <S.PlaylistItem key={playlist.id}>
            <Link href={`/playlist/${playlist.id}`} passHref>
              <S.PlaylistItemLink>{playlist.name}</S.PlaylistItemLink>
            </Link>
          </S.PlaylistItem>
        ))}
      </S.Playlists>
    </S.Sidebar>
  );
};

export default Sidebar;
