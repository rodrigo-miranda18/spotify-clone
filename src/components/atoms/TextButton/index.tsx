import React from 'react';

import * as S from './styles';

type Props = {
  text: string;
  onClick?: () => void;
};

const TextButton = ({ text, onClick }: Props) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};

export default TextButton;
