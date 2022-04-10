import styled from 'styled-components';
import { colors, fontSizes } from 'styles/variables';

export const Sidebar = styled.aside`
  background: ${colors.black};
  display: none;
  flex-direction: column;
  height: 100%;
  margin-bottom: 18px;
  padding-top: 24px;
  width: max-content;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const LogoLink = styled.a`
  margin-bottom: 18px;
  padding: 0 24px;
`;

export const Items = styled.ul`
  > :nth-child(4) {
    margin-top: 24px;
  }
`;

export const Playlists = styled.ul`
  border-top: 1px solid ${colors.darkGrey};
  list-style: none;
  margin: 8px 24px 0;
  padding: 8px 0;
`;

export const PlaylistItem = styled.li`
  padding: 5px 0;
`;

export const PlaylistItemLink = styled.a`
  color: ${colors.grey};
  cursor: default;
  font-size: ${fontSizes.small};
  text-decoration: none;

  :hover {
    color: ${colors.white};
  }
`;
