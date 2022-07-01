import styled from 'styled-components';

export const TabContent = styled.div<{ 'data-tab-id': string }>`
  padding-top: 40px;
`;

export const TabContentPresenter = styled.div<{ activeTabId: string }>`
  > *:not([data-tab-id='${(p) => p.activeTabId}']) {
    display: none;
  }
`;
