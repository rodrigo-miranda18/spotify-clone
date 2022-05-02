import styled, { css } from 'styled-components';
import { colors } from 'styles/variables';

type ProgressBarProps = {
  isDragging: boolean;
};

const ActiveSlider = css`
  .rc-slider-track {
    background: ${colors.green};
  }

  .rc-slider-handle {
    display: block;
  }
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  width: 100%;

  .rc-slider {
    display: flex;
    height: 4px;
    padding: 0;

    .rc-slider-rail {
      background: rgba(255, 255, 255, 0.3);
    }

    .rc-slider-track {
      background: ${colors.white};
    }

    .rc-slider-handle {
      background: ${colors.white};
      border: 0 !important;
      box-shadow: none !important;
      cursor: default;
      display: none;
      height: 12px;
      margin-top: -4px;
      opacity: 1;
      width: 12px;
    }

    :hover {
      ${ActiveSlider}
    }

    ${({ isDragging }) => isDragging && ActiveSlider}
  }
`;
