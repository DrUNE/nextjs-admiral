import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavPanelButton } from 'components/NavPanel/NavPanelButton';
import { ReactComponent as StarOutline } from '@admiral-ds/icons/build/system/StarOutline.svg';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { ReactComponent as TypographyOutline } from '@admiral-ds/icons/build/category/TypographyOutline.svg';
import { ReactComponent as TypographySolid } from '@admiral-ds/icons/build/category/TypographySolid.svg';

const ROUTE_LIST_MODEL = [
  {
    href: '/documentation/button',
    text: 'Основы',
    icon: ({ isActive }: { isActive?: boolean }) => (isActive ? <StarSolid /> : <StarOutline />),
  },
  {
    href: '/documentation/icon',
    text: 'Компоненты',
  },
  {
    href: '/documentation/typography',
    text: 'Типографика',
    icon: ({ isActive }: { isActive?: boolean }) => (isActive ? <TypographySolid /> : <TypographyOutline />),
  },
] as Array<{ href: string; text?: string; icon?: React.FunctionComponent<{ isActive?: boolean }> }>;

export const NavButtonList = () => {
  const { asPath } = useRouter();
  const [activeIndex, setActiveIndex] = React.useState(-1);

  React.useEffect(() => {
    const activePath = new URL(asPath, location.href).pathname;
    setActiveIndex(ROUTE_LIST_MODEL.findIndex(({ href }) => activePath === new URL(href, location.href).pathname));
  }, [asPath]);

  return (
    <>
      {ROUTE_LIST_MODEL.map(({ href, text, icon }, index) => (
        <Link key={href} href={href} passHref>
          <NavPanelButton text={text} isActive={index === activeIndex} icon={icon} />
        </Link>
      ))}
    </>
  );
};
