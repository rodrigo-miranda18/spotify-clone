import React from 'react';

import Icon, { Props as IconProps } from '../Icon';

import * as S from './styles';

type IconButtonProps = IconProps & {
  onClick?: () => void;
};

const IconButton = (props: IconButtonProps) => (
  <S.Button onClick={props.onClick} active={props.active}>
    <Icon {...props} />
  </S.Button>
);

export default IconButton;
