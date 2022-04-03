import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Page = styled.div`
  align-items: center;
  display: flex;
  background: ${colors.dark};
  flex-direction: column;
  height: 100vh;
  padding: 0 40px;
`;

export const LogoWrapper = styled.div`
  margin-top: 280px;
  width: 80%;

  @media screen and (min-width: 425px) {
    width: 275px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 340px;
    width: 215px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 35px;
  width: 100%;

  @media screen and (min-width: 425px) {
    width: auto;
  }
`;
