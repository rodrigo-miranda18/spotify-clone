import React from 'react';

import PlayerCurrentSong from 'components/molecules/PlayerCurrentSong';
import PlayerControlButtons from 'components/molecules/PlayerControlButtons';
import PlayerNavigationButtons from 'components/molecules/PlayerNavigationButtons';

import * as S from './styles';

const Desktop = () => (
  <S.Player>
    <PlayerCurrentSong />
    <PlayerControlButtons />
    <PlayerNavigationButtons />
  </S.Player>
);

export default Desktop;
