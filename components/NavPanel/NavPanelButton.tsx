import styled from 'styled-components';
import * as React from 'react';
import { T } from '@admiral-ds/react-ui';

const NavPanelButtonContainer = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
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
`;
export type NavPanelButtonProps = {
  text?: string;
  icon?: React.FunctionComponent;
};
export const NavPanelButton: React.FC<NavPanelButtonProps> = ({ icon = () => null, text = '', ...props }) => {
  const Icon = icon;
  return (
    <NavPanelButtonContainer {...props}>
      <IconContainer>
        <Icon />
      </IconContainer>
      <TextContainer>
        <T color={'Special/Dark Static Neutral 90'} font={'Body/Body 2 Long'}>
          {text}
        </T>
      </TextContainer>
    </NavPanelButtonContainer>
  );
};
