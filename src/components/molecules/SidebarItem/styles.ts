import styled from 'styled-components';
import { colors, fontSizes } from 'styles/variables';

type LinkProps = {
  active: boolean;
};

export const Item = styled.li`
  margin: auto 0;
  width: 100%;

  @media screen and (min-width: 1024px) {
    min-width: 240px;
  }
`;

export const Link = styled.a<LinkProps>`
  align-items: center;
  color: ${({ active }) => (active ? colors.white : colors.grey)};
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: color 0.2s linear;

  :hover {
    color: ${colors.white};
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    height: 40px;
    padding: 0 24px;
  }
`;

export const Title = styled.h4`
  font-family: 'Circular Std Light';
  font-size: ${fontSizes.cap};
  letter-spacing: 0.3px;
  margin-top: 2px;
  text-align: center;

  @media screen and (min-width: 1024px) {
    font-family: 'Circular Std Black';
    font-size: ${fontSizes.small};
    letter-spacing: initial;
    margin: 0 0 0 16px;
  }
`;
