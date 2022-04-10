import styled from 'styled-components';
import { colors, fontSizes } from 'styles/variables';

type LinkProps = {
  active: boolean;
};

export const Item = styled.li`
  min-width: 240px;
  width: 100%;
`;

export const Link = styled.a<LinkProps>`
  align-items: center;
  color: ${({ active }) => (active ? colors.white : colors.grey)};
  display: flex;
  height: 40px;
  padding: 0 24px;
  text-decoration: none;
  transition: color 0.2s linear;

  :hover {
    color: ${colors.white};
  }
`;

export const Title = styled.h4`
  font-size: ${fontSizes.small};
  margin-left: 16px;
`;
