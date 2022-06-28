import * as React from 'react';
import { T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { TopBar } from 'components/TopBar';
import { MenuToggleButton } from 'components/TopBar/MenuToggleButon';
import { NavPanel } from 'components/NavPanel';
import { device } from 'components/Layout/device';
import { useMediaQuery } from 'components/Layout/useMediaQuery';
import { NavButtonList } from 'components/NavPanel/NavButtonList';

const MobileContainer = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.color['Neutral/Neutral 05']};
  min-height: 100vh;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const DesktopContainer = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.color['Neutral/Neutral 05']};
  height: 100vh;
  overflow-y: auto;
  padding: 0 60px 0 348px;
`;

const Overlay = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(p) => (p.show ? 'block' : 'none')};
  background-color: ${(p) => p.theme.color['Opacity/Modal']};
`;

const PositionedTopBar = styled(TopBar)`
  flex: 0 0 auto;
  display: flex;
  padding: 0 8px;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;

const MobilePositionNavPanel = styled(NavPanel)`
  position: absolute;
  top: 1px;
  bottom: 0;
  left: 0;
`;

const DesktopPositionNavPanel = styled(NavPanel)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
`;

const MobileContent = styled.div`
  position: relative;
  flex: 1 1 100%;
`;

export function Layout({ children }: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery(device.laptop);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return !isDesktop ? (
    <MobileContainer>
      <PositionedTopBar>
        <MenuToggleButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <T color={'Special/Dark Static Neutral 90'} font={'Header/H6'}>
          Admiral
        </T>
      </PositionedTopBar>
      <MobileContent>
        {children}
        {isMenuOpen && (
          <>
            <Overlay show={isMenuOpen} />
            <MobilePositionNavPanel isMobile>
              <NavButtonList />
            </MobilePositionNavPanel>
          </>
        )}
      </MobileContent>
    </MobileContainer>
  ) : (
    <DesktopContainer>
      {children}
      <DesktopPositionNavPanel>
        <NavButtonList />
      </DesktopPositionNavPanel>
    </DesktopContainer>
  );
}
