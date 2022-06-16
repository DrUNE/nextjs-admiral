import styled from 'styled-components';
import { MouseEventHandler } from 'react';
import { ReactComponent as CloseSvg } from './Outline/Close Outline.svg';
import { ReactComponent as MenuSvg } from './Outline/Menu Outline.svg';

const Container = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background: ${(p) => p.theme.color['Opacity/Dark Static Hover']};
  }
  &:active {
    background: ${(p) => p.theme.color['Opacity/Dark Static Press']};
  }
  & > svg {
    display: block;

    width: 24px;
    height: 24px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export type MenuToggleButtonProps = {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};
export const MenuToggleButton = (props: MenuToggleButtonProps) => {
  return <Container {...props}>{props.isOpen ? <CloseSvg /> : <MenuSvg />}</Container>;
};
