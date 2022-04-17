import React from 'react';

import Home from './Icons/Home';
import Library from './Icons/Library';
import Search from './Icons/Search';
import Create from './Icons/Create';
import Heart from './Icons/Heart';
import Spotify from './Icons/Spotify';
import ArrowLeft from './Icons/ArrowLeft';
import ArrowRight from './Icons/ArrowRight';
import Avatar from './Icons/Avatar';
import Dropdown from './Icons/Dropdown';
import TabLink from './Icons/TabLink';

export type Props = {
  icon: string;
  color: string;
  width?: number;
  height?: number;
  active?: boolean;
};

const Icon = (props: Props) => {
  const icons = {
    home: <Home {...props} />,
    library: <Library {...props} />,
    search: <Search {...props} />,
    create: <Create />,
    heart: <Heart />,
    spotify: <Spotify {...props} />,
    'arrow-left': <ArrowLeft {...props} />,
    'arrow-right': <ArrowRight {...props} />,
    avatar: <Avatar {...props} />,
    dropdown: <Dropdown {...props} />,
    'tab-link': <TabLink {...props} />,
    default: <></>,
  };

  return icons[props.icon] || icons.default;
};

export default Icon;
