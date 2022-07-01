import * as React from 'react';
import { TabContent } from 'components/TabContentPresenter';

export const UseCaseTabContent: React.FunctionComponent<{ 'data-tab-id': string }> = (props) => {
  return <TabContent {...props}>Tab UseCaseTabContent</TabContent>;
};
