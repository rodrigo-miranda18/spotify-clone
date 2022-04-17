import React from 'react';

import { Props } from '..';

const ArrowRight = ({ color }: Props) => {
  return (
    <svg
      fill={color}
      width="22px"
      height="22px"
      viewBox={`0 0 24 24`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
    </svg>
  );
};

export default ArrowRight;
