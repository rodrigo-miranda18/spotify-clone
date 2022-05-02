import styled, { css } from 'styled-components';
import { colors } from 'styles/variables';

type ButtonProps = {
  active?: boolean;
};

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background: transparent;
  border: 0;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;

  :hover {
    color: ${colors.white};
  }

  :after {
    background: ${colors.green};
    border-radius: 100%;
    display: block;
    height: 4px;
    position: absolute;
    transform: translateY(12px);
    width: 4px;

    ${({ active }) =>
      active &&
      css`
        content: '';
      `}
  }
`;
