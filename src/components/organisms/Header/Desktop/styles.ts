import styled from 'styled-components';
import { colors, fontSizes } from 'styles/variables';

type DropdownProps = {
  active?: boolean;
};

export const Header = styled.header`
  display: none;
  justify-content: space-between;
  margin-left: 240px;
  padding: 16px 32px;
  position: fixed;
  width: calc(100vw - 240px);

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  gap: 16px;
`;

export const NavigationButton = styled.div<DropdownProps>`
  align-items: center;
  background: ${({ active }) =>
    active ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.6)'};
  border-radius: 100%;
  cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed')};
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;
`;

export const ProfileDropdown = styled.div<DropdownProps>`
  align-items: center;
  background: ${({ active }) => (active ? colors.darkGrey : colors.black)};
  border-radius: 23px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  padding: 2px 8px 2px 2px;

  :hover {
    background: ${colors.darkGrey};
  }
`;

export const Avatar = styled.div`
  align-items: center;
  background: ${colors.mediumDarkGrey};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  height: 28px;
  width: 28px;
`;

export const Name = styled.span`
  color: ${colors.white};
  font-family: 'Circular Std Black';
  font-size: ${fontSizes.small};
`;

export const ProfileMenu = styled.ul`
  background: ${colors.darkGrey};
  border-radius: 4px;
  box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
  list-style: none;
  min-width: 196px;
  padding: 4px;
  position: absolute;
  right: 0;
  transform: translate(-32px, 40px);
`;

export const MenuItem = styled.li`
  color: rgba(255, 255, 255, 0.9);

  :hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${colors.white};
  }
`;

export const MenuItemLink = styled.a`
  align-items: center;
  color: inherit;
  cursor: default;
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 12px 8px 12px 12px;
  text-decoration: none;
`;

export const MenuItemName = styled.span`
  font-family: 'Circular Std Book';
  font-size: ${fontSizes.small};
`;
