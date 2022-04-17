import React from 'react';

import { Props } from '..';

const TabLink = ({ color, width, height }: Props) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox={`0 0 16 16`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path>
      <path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path>
    </svg>
  );
};

export default TabLink;
