import styled from 'styled-components';
import { typography } from '@admiral-ds/react-ui';
import { device } from 'components/Layout/device';

export const Body = styled.p`
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  ${typography['Body/Body 2 Long']};
  @media ${device.laptop} {
    ${typography['Body/Body 1 Long']};
  }
`;
