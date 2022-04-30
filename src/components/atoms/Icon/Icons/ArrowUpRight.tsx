import React from 'react';

import { Props } from '..';

const ArrowUpRight = ({ color, width, height }: Props) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 5v10.193a1 1 0 11-2 0V8.414L5.707 19.707a1 1 0 01-1.414-1.414L15.586 7H8.808a1 1 0 010-2H19z"></path>
    </svg>
  );
};

export default ArrowUpRight;
