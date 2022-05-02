import React, { useState } from 'react';

import Icon from 'components/atoms/Icon';

import * as S from './styles';

const PlayerCurrentSong = () => {
  const [isAlreadySaved, setIsAlreadySaved] = useState(false);

  return (
    <S.ContentInfo>
      <S.PlaylistThumbnailContainer>
        <S.PlaylistThumbnail src="https://i.scdn.co/image/ab67616d00004851d523ee343c7e154e87242595" />
      </S.PlaylistThumbnailContainer>

      <S.Info>
        <S.SongName>Ray of Life</S.SongName>
        <S.Artist>Kiko Loureiro</S.Artist>
      </S.Info>

      <S.SaveSongButton
        isAlreadySaved={isAlreadySaved}
        onClick={() => setIsAlreadySaved(!isAlreadySaved)}
      >
        <Icon
          active={isAlreadySaved}
          name="heart"
          color="currentColor"
          width={16}
          height={16}
        />
      </S.SaveSongButton>
    </S.ContentInfo>
  );
};

export default PlayerCurrentSong;
