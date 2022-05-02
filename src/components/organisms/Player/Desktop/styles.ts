import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Player = styled.div`
  align-items: center;
  background: ${colors.mediumDark};
  border: 1px solid ${colors.darkGrey};
  bottom: 0;
  display: flex;
  height: 90px;
  padding: 0 16px;
  position: fixed;
  width: 100%;
`;
