import React from 'react';

import { Props } from '..';

const Play = ({ active, color, width, height }: Props) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox={`0 0 16 16`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {active ? (
        <path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path>
      ) : (
        <path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path>
      )}
    </svg>
  );
};

export default Play;
