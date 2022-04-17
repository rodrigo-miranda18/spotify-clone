import React, { ReactNode, useRef, useState } from 'react';
import { signOut } from 'next-auth/react';

import { useHistory } from 'contexts/History';
import useOnClickOutside from 'hooks/useOnClickOutside';
import Icon from 'components/atoms/Icon';

import * as S from './styles';

type DesktopHeaderProps = {
  children?: ReactNode;
};

const Desktop = ({ children }: DesktopHeaderProps) => {
  const { goBack, goForward, currentRouteIndex, history } = useHistory();
  const goBackButtonIsActive = currentRouteIndex > 1;
  const goFowardButtonIsActive = currentRouteIndex < history.length;

  const [dropdownIsActive, setDropdownIsActive] = useState(false);
  const profileDropdownRef = useRef(null);
  const profileMenuRef = useRef(null);

  useOnClickOutside(profileMenuRef, event => {
    if (!profileDropdownRef.current.contains(event.target)) {
      setDropdownIsActive(false);
    }
  });

  return (
    <S.Header>
      <S.NavigationButtons>
        <S.NavigationButton
          active={goBackButtonIsActive}
          onClick={goBackButtonIsActive ? goBack : null}
        >
          <Icon
            icon="arrow-left"
            color={goBackButtonIsActive ? '#FFF' : '#999999'}
          />
        </S.NavigationButton>
        <S.NavigationButton
          active={goFowardButtonIsActive}
          onClick={goFowardButtonIsActive ? goForward : null}
        >
          <Icon
            icon="arrow-right"
            color={goFowardButtonIsActive ? '#FFF' : '#999999'}
          />
        </S.NavigationButton>
      </S.NavigationButtons>

      {children}

      <S.ProfileDropdown
        ref={profileDropdownRef}
        onClick={() => setDropdownIsActive(!dropdownIsActive)}
        active={dropdownIsActive}
      >
        <S.Avatar>
          <Icon icon="avatar" color="white" width={14.4} height={16} />
        </S.Avatar>
        <S.Name>rodrigo120128</S.Name>
        <Icon
          icon="dropdown"
          color="white"
          width={16}
          height={16}
          active={dropdownIsActive}
        />
      </S.ProfileDropdown>

      {dropdownIsActive && (
        <S.ProfileMenu ref={profileMenuRef}>
          <S.MenuItem>
            <S.MenuItemLink
              target="_blank"
              href="https://www.spotify.com/br/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account"
            >
              <S.MenuItemName>Conta</S.MenuItemName>
              <Icon
                icon="tab-link"
                color="currentColor"
                width={16}
                height={16}
              />
            </S.MenuItemLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuItemLink onClick={() => signOut()}>
              <S.MenuItemName>Sair</S.MenuItemName>
            </S.MenuItemLink>
          </S.MenuItem>
        </S.ProfileMenu>
      )}
    </S.Header>
  );
};

export default Desktop;
