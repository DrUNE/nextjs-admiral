import * as React from 'react';
import { Layout } from 'components/Layout';
import { H1 } from 'components/H1';
import { TabProps } from '@admiral-ds/react-ui';
import { TabContentPresenter } from 'components/TabContentPresenter';
import { OverviewTabContent } from 'pages/documentation/typography/tabs/OverviewTabContent';
import { UseCaseTabContent } from 'pages/documentation/typography/tabs/UseCaseTabContent';
import { Tabs } from 'components/Tabs';

const tabs = [
  {
    id: 'overview-tab-content',
    content: 'Обзор',
  },
  {
    id: 'use-case-tab-content',
    content: 'Назначение стилей',
  },
] as TabProps[];

export default function TypographyPage() {
  const [activeTabId, setActiveTabId] = React.useState(tabs[0].id);
  return (
    <Layout>
      <H1>Типографика</H1>
      <Tabs tabs={tabs} activeTab={activeTabId} onChange={setActiveTabId} underline />
      <TabContentPresenter activeTabId={activeTabId}>
        <OverviewTabContent data-tab-id="overview-tab-content" />
        <UseCaseTabContent data-tab-id="use-case-tab-content" />
      </TabContentPresenter>
    </Layout>
  );
}
