import styled from 'styled-components';
import { device } from 'components/Layout/device';

export const TopBar = styled.div`
  height: 48px;
  background-color: ${(p) => p.theme.color['Special/Dark Static Neutral 10']};
  @media ${device.laptop} {
    && {
      display: none;
    }
  }
`;
