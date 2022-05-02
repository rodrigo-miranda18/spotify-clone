import React from 'react';

import { signIn } from 'next-auth/react';

import SpotifyLogo from 'components/atoms/SpotifyLogo';
import TextButton from 'components/atoms/TextButton';

import * as S from './styles';
import { colors } from 'styles/variables';

const Login = () => {
  return (
    <S.Page>
      <S.LogoWrapper>
        <SpotifyLogo color={colors.spotifyGreen} width="100%" height="auto" />
      </S.LogoWrapper>
      <S.ButtonWrapper>
        <TextButton
          text="Fazer Login"
          onClick={() => signIn('spotify', { callbackUrl: '/' })}
        />
      </S.ButtonWrapper>
    </S.Page>
  );
};

export default Login;
