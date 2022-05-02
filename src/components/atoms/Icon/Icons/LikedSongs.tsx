import React from 'react';
import styled from 'styled-components';

import { colors } from 'styles/variables';

const IconBackground = styled.div`
  align-items: center;
  background: ${`linear-gradient(135deg, ${colors.purple}, #c4efd9)`};
  display: flex;
  height: 24px;
  justify-content: center;
  width: 24px;
`;

const LikedSongs = () => {
  return (
    <IconBackground>
      <svg
        fill="white"
        width="12"
        height="12"
        viewBox={`0 0 16 16`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path>
      </svg>
    </IconBackground>
  );
};

export default LikedSongs;
