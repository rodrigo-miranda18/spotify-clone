import React, { useState } from 'react';
import { signOut } from 'next-auth/react';

import Icon from 'components/atoms/Icon';

import * as S from './styles';

const Mobile = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.Nav>
      <S.IconWrapper onClick={() => setIsActive(!isActive)}>
        <Icon icon="gear" color="white" width={24} height={24} />
      </S.IconWrapper>
      <S.Menu active={isActive}>
        <S.MenuContent>
          <S.IconWrapper onClick={() => setIsActive(!isActive)}>
            <Icon icon="close" color="white" width={24} height={24} />
          </S.IconWrapper>
          <S.MenuItems>
            <S.LargeMenuItem>
              <S.MenuItemLink
                target="_blank"
                href="https://www.spotify.com/br/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account"
              >
                Ver conta
                <Icon
                  icon="arrow-up-right"
                  color="white"
                  width={24}
                  height={24}
                />
              </S.MenuItemLink>
            </S.LargeMenuItem>

            <S.LargeMenuItem>
              <S.MenuItemLink onClick={() => signOut()}>Sair</S.MenuItemLink>
            </S.LargeMenuItem>

            <S.MenuItemSeparator />

            <S.MediumMenuItem>
              <S.MenuItemLink
                target="_blank"
                href="https://www.spotify.com/br/legal/privacy-policy/"
              >
                Privacidade
              </S.MenuItemLink>
            </S.MediumMenuItem>

            <S.MediumMenuItem>
              <S.MenuItemLink
                target="_blank"
                href="https://www.spotify.com/br/legal/end-user-agreement/"
              >
                Condições
              </S.MenuItemLink>
            </S.MediumMenuItem>
          </S.MenuItems>
        </S.MenuContent>
      </S.Menu>
    </S.Nav>
  );
};

export default Mobile;
