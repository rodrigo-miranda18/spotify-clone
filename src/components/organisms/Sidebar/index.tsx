import React, { useState, useEffect } from 'react';

import { api } from 'services/api';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Sidebar = () => {
  const [playlistsData, setPlaylistsData] = useState([]);

  useEffect(() => {
    (async () => {
      const { status, data } = await api.get('/api/playlists');

      if (status === 200) {
        setPlaylistsData(data.items);
      }
    })();
  }, []);

  return (
    <>
      <Desktop data={playlistsData} />
      <Mobile />
    </>
  );
};

export default Sidebar;
