import React, { useState } from 'react';
import Slider, { SliderProps } from 'rc-slider';

import 'rc-slider/assets/index.css';
import * as S from './styles';

const ProgressBar = (props: SliderProps) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <S.ProgressBar isDragging={isDragging}>
      <Slider
        {...props}
        onBeforeChange={() => setIsDragging(true)}
        onAfterChange={() => setIsDragging(false)}
      />
    </S.ProgressBar>
  );
};

export default ProgressBar;
