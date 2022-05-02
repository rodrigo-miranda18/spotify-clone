import styled, { css } from 'styled-components';
import { colors, fontSizes } from 'styles/variables';

type EnableButtonProps = {
  active?: boolean;
};

export const ControlButtons = styled.div`
  width: 40%;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;

  > button:nth-child(2) {
    margin: 0 16px 0 8px;
  }

  > button:nth-child(4) {
    margin: 0 8px 0 16px;
  }
`;

export const Button = styled.button`
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
`;

export const EnableButton = styled(Button)<EnableButtonProps>`
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

export const PlayButton = styled.button`
  align-items: center;
  background: ${colors.white};
  border: 0;
  border-radius: 100%;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;

  :hover {
    transform: scale(1.06);
    transition: none 33ms cubic-bezier(0.3, 0, 0, 1);
  }
`;

export const SongProgress = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  padding: 0 24px;
`;

export const ProgressTime = styled.span`
  color: ${colors.grey};
  font-family: 'Circular Std Light', sans-serif;
  font-size: ${fontSizes.cap};
  height: 14px;
  line-height: 1rem;
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
`;
