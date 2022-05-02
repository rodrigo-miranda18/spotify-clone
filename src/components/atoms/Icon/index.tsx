import React from 'react';

import Home from './Icons/Home';
import Library from './Icons/Library';
import Search from './Icons/Search';
import Create from './Icons/Create';
import LikedSongs from './Icons/LikedSongs';
import Spotify from './Icons/Spotify';
import ArrowLeft from './Icons/ArrowLeft';
import ArrowRight from './Icons/ArrowRight';
import ArrowUpRight from './Icons/ArrowUpRight';
import Avatar from './Icons/Avatar';
import Dropdown from './Icons/Dropdown';
import TabLink from './Icons/TabLink';
import Gear from './Icons/Gear';
import Close from './Icons/Close';
import Heart from './Icons/Heart';
import Shuffle from './Icons/Shuffle';
import Previous from './Icons/Previous';
import Next from './Icons/Next';
import Play from './Icons/Play';
import Repeat from './Icons/Repeat';
import Microphone from './Icons/Microphone';
import Queue from './Icons/Queue';
import Volume from './Icons/Volume';

export type Props = {
  name: string;
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
    'liked-songs': <LikedSongs />,
    spotify: <Spotify {...props} />,
    'arrow-left': <ArrowLeft {...props} />,
    'arrow-right': <ArrowRight {...props} />,
    'arrow-up-right': <ArrowUpRight {...props} />,
    avatar: <Avatar {...props} />,
    dropdown: <Dropdown {...props} />,
    'tab-link': <TabLink {...props} />,
    gear: <Gear {...props} />,
    close: <Close {...props} />,
    heart: <Heart {...props} />,
    shuffle: <Shuffle {...props} />,
    previous: <Previous {...props} />,
    next: <Next {...props} />,
    play: <Play {...props} />,
    repeat: <Repeat {...props} />,
    microphone: <Microphone {...props} />,
    queue: <Queue {...props} />,
    volume: <Volume {...props} />,
    default: <></>,
  };

  return icons[props.name] || icons.default;
};

export default Icon;
