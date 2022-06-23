import styled from 'styled-components';
import * as React from 'react';
import { T } from '@admiral-ds/react-ui';

const NavPanelButtonContainer = styled.a<{ isActive?: boolean }>`
  text-decoration: none;
  height: 36px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;

  background-color: ${(p) => (p.isActive ? p.theme.color['Opacity/Dark Static Focus'] : 'initial')};
  &:hover {
    background-color: ${(p) => p.theme.color['Opacity/Dark Static Hover']};
  }

  &:active {
    background-color: ${(p) => p.theme.color['Opacity/Dark Static Press']};
  }
`;

const TextContainer = styled.div`
  flex: 1 1 100%;
`;
const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
  margin: 0 16px 0 8px;
  & path {
    fill: ${(p) => p.theme.color['Special/Dark Static Neutral 90']};
  }
`;
export type NavPanelButtonProps = {
  text?: string;
  icon?: React.FunctionComponent<{ isActive?: boolean }>;
  isActive?: boolean;
};
export const NavPanelButton = React.forwardRef<HTMLAnchorElement, NavPanelButtonProps>(
  ({ icon = () => null, text = '', ...props }, ref) => {
    const Icon = icon;
    return (
      <NavPanelButtonContainer {...props} ref={ref}>
        <IconContainer>
          <Icon isActive={props.isActive} />
        </IconContainer>
        <TextContainer>
          <T color={'Special/Dark Static Neutral 90'} font={'Body/Body 2 Long'}>
            {text}
          </T>
        </TextContainer>
      </NavPanelButtonContainer>
    );
  },
);

NavPanelButton.displayName = 'NavPanelButton';
