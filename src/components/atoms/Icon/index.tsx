import React from 'react';

import Home from './Icons/Home';
import Library from './Icons/Library';
import Search from './Icons/Search';
import Create from './Icons/Create';
import Heart from './Icons/Heart';

export type Props = {
  icon: string;
  color: string;
  width: number;
  height: number;
  active: boolean;
};

const Icon = (props: Props) => {
  const icons = {
    home: <Home {...props} />,
    library: <Library {...props} />,
    search: <Search {...props} />,
    create: <Create />,
    heart: <Heart />,
    default: <></>,
  };

  return icons[props.icon] || icons.default;
};

export default Icon;
