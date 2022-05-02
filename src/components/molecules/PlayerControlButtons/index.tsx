import React, { useState } from 'react';

import Icon from 'components/atoms/Icon';
import IconButton from 'components/atoms/IconButton';
import ProgressBar from 'components/atoms/ProgressBar';

import { colors } from 'styles/variables';
import * as S from './styles';

const PlayerControlButtons = () => {
  const [shuffleIsActive, setShuffleIsActive] = useState(false);
  const [repeatIsActive, setRepeatIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <S.ControlButtons>
      <S.Buttons>
        <IconButton
          active={shuffleIsActive}
          onClick={() => setShuffleIsActive(!shuffleIsActive)}
          name="shuffle"
          color={shuffleIsActive ? colors.green : 'currentColor'}
          width={16}
          height={16}
        />

        <IconButton name="previous" color="currentColor" width={16} height={16} />

        <S.PlayButton onClick={() => setIsPlaying(!isPlaying)}>
          <Icon name="play" color="currentColor" width={16} height={16} active={isPlaying} />
        </S.PlayButton>

        <IconButton name="next" color="currentColor" width={16} height={16} />

        <IconButton
          active={repeatIsActive}
          onClick={() => setRepeatIsActive(!repeatIsActive)}
          name="repeat"
          color={repeatIsActive ? colors.green : 'currentColor'}
          width={16}
          height={16}
        />
      </S.Buttons>

      <S.SongProgress>
        <S.ProgressTime>0:46</S.ProgressTime>

        <S.ProgressBarWrapper>
          <ProgressBar />
        </S.ProgressBarWrapper>

        <S.ProgressTime>4:32</S.ProgressTime>
      </S.SongProgress>
    </S.ControlButtons>
  );
};

export default PlayerControlButtons;
