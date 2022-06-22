import styled from 'styled-components';
import * as React from 'react';
import { ReactComponent as AdmiralIconSvg } from './Admiral Icon.svg';
import { T } from '@admiral-ds/react-ui';

const AdmiralIcon = styled(AdmiralIconSvg)`
  flex: 0 0 auto;
  width: 20px;
  margin: 28px 16px;
`;
const NavPanelContainer = styled.nav`
  background-color: ${(p) => p.theme.color['Special/Dark Static Neutral 10']};
  width: 288px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const NavPanelHeader = styled.div`
  flex: 0 0 auto;
  display: flex;
  overflow: hidden;
  align-items: center;
  height: 76px;
`;
const NavButtonContainer = styled.div<{ isMobile?: boolean }>`
  padding: 0 8px;
  padding-top: ${(p) => (!p.isMobile ? '0' : '24px')};
  overflow-y: auto;
  flex: 1 1 100%;
  & > * {
    margin-bottom: 8px;
  }
`;
export type NavPanelProps = {
  isMobile?: boolean;
};
export const NavPanel: React.FC<NavPanelProps> = ({ children, isMobile, ...props }) => {
  return (
    <NavPanelContainer {...props}>
      {!isMobile && (
        <NavPanelHeader>
          <AdmiralIcon />
          <T color={'Special/Dark Static Neutral 90'} font={'Header/H5'}>
            Admiral
          </T>
        </NavPanelHeader>
      )}
      <NavButtonContainer isMobile={isMobile}>{children}</NavButtonContainer>
    </NavPanelContainer>
  );
};
