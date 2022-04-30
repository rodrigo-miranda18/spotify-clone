import styled from 'styled-components';
import { colors, fontSizes } from 'styles/variables';

type MenuProps = {
  active: boolean;
};

export const Nav = styled.div`
  position: fixed;
  width: 100%;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  height: max-content;
  padding: 8px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Menu = styled.nav<MenuProps>`
  background: ${colors.black};
  height: 100vh;
  opacity: ${({ active }) => (active ? '1' : '0')};
  position: absolute;
  right: 0;
  top: 0;
  transition: ${({ active }) =>
    !active
      ? 'width 0.45s ease-out, opacity 0.45s ease-out'
      : 'width 0.3s linear, opacity 0.3s linear'};
  width: ${({ active }) => (active ? '100%' : '60%')};
`;

export const MenuContent = styled.div`
  padding: 40px 40px 120px;
`;

export const MenuItems = styled.ul`
  color: ${colors.white};
  list-style: none;
`;

export const LargeMenuItem = styled.li`
  font-size: ${fontSizes.large};
  letter-spacing: -0.04em;
  line-height: 1.75rem;
  margin-top: 24px;
`;

export const MediumMenuItem = styled.li`
  font-size: ${fontSizes.mediumLarge};
  line-height: 1.5rem;
  margin-bottom: 16px;
`;

export const MenuItemLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  font-family: 'Circular Std Black';
  gap: 8px;
  text-decoration: none;
  width: max-content;
`;

export const MenuItemSeparator = styled.hr`
  margin: 32px 0;
  width: 16px;
`;
