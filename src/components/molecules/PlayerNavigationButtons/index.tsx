import React from 'react';

import IconButton from 'components/atoms/IconButton';
import ProgressBar from 'components/atoms/ProgressBar';

import * as S from './styles';

const PlayerNavigationButtons = () => {
  return (
    <S.NavigationButtons>
      <IconButton name="microphone" color="currentColor" width={16} height={16} />
      <IconButton name="queue" color="currentColor" width={16} height={16} />

      <IconButton name="volume" color="currentColor" width={16} height={16} />
      <S.VolumeProgress>
        <ProgressBar />
      </S.VolumeProgress>
    </S.NavigationButtons>
  );
};

export default PlayerNavigationButtons;
