import React from 'react';

import { Props } from '..';

const ArrowLeft = ({ color }: Props) => {
  return (
    <svg
      fill={color}
      width="22px"
      height="22px"
      viewBox={`0 0 24 24`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
    </svg>
  );
};

export default ArrowLeft;
