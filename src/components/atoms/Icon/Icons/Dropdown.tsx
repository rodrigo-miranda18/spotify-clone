import React from 'react';

import { Props } from '..';

const Dropdown = ({ color, width, height, active }: Props) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox={`0 0 16 16`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {active ? (
        <path d="M14 10L8 4l-6 6h12z"></path>
      ) : (
        <path d="M14 6l-6 6-6-6h12z"></path>
      )}
    </svg>
  );
};

export default Dropdown;
