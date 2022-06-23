import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavPanelButton } from 'components/NavPanel/NavPanelButton';

const ROUTE_LIST_MODEL = [
  {
    href: '/documentation/button',
    text: 'Основы',
  },
  {
    href: '/documentation/icon',
    text: 'Компоненты',
  },
] as const;

export const NavButtonList = () => {
  const { asPath } = useRouter();
  const [activeIndex, setActiveIndex] = React.useState(-1);

  React.useEffect(() => {
    const activePath = new URL(asPath, location.href).pathname;
    setActiveIndex(ROUTE_LIST_MODEL.findIndex(({ href }) => activePath === new URL(href, location.href).pathname));
  }, [asPath]);

  return (
    <>
      {ROUTE_LIST_MODEL.map(({ href, text }, index) => (
        <Link key={href} href={href} passHref>
          <NavPanelButton text={text} isActive={index === activeIndex} />
        </Link>
      ))}
    </>
  );
};
