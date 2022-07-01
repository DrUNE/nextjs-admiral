import * as React from 'react';
import { TabMenu } from '@admiral-ds/react-ui';
import { TabMenuProps } from '@admiral-ds/react-ui/dist/components/TabMenu';
import { useMediaQuery } from 'components/Layout/useMediaQuery';
import { device } from 'components/Layout/device';

export const Tabs: React.FunctionComponent<TabMenuProps> = (props) => {
  const isDesktop = useMediaQuery(device.laptop);
  return <TabMenu {...props} dimension={isDesktop ? 'l' : 'm'} />;
};
