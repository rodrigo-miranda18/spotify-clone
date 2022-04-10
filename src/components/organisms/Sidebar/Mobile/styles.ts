import styled from 'styled-components';
import { colors } from 'styles/variables';

export const MobileSidebar = styled.nav`
  background: ${colors.darkGrey};
  bottom: 0;
  display: flex;
  min-height: 48px;
  position: fixed;
  width: 100%;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const Items = styled.ul`
  display: flex;
  list-style: none;
  margin: auto 0;
  width: 100%;
`;
