import styled from 'styled-components';
import { colors, fontSizes } from 'styles/variables';

export const Button = styled.button`
  background: ${colors.spotifyGreen};
  border: 0;
  border-radius: 50px;
  cursor: pointer;
  font-size: ${fontSizes.small};
  font-weight: 700;
  height: 48px;
  letter-spacing: 1px;
  padding: 0 32px;
  text-transform: uppercase;
  width: 100%;

  @media screen and (min-width: 425px) {
    width: 357px;
  }

  @media screen and (min-width: 768px) {
    width: auto;
  }
`;
