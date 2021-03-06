import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Icon from 'components/atoms/Icon';

import * as S from './styles';

type Props = {
  name: string;
  text: string;
  link: string;
};

const SidebarItem = ({ name, text, link }: Props) => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(router.pathname === link);
  }, []);

  return (
    <S.Item>
      <Link href={link} passHref>
        <S.Link active={active}>
          <Icon
            name={name}
            width={24}
            height={24}
            color="currentColor"
            active={active}
          />
          <S.Title>{text}</S.Title>
        </S.Link>
      </Link>
    </S.Item>
  );
};

export default SidebarItem;
