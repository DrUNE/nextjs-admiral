import styled from 'styled-components';
import { device } from 'components/Layout/device';
import { typography } from '@admiral-ds/react-ui';

export const H1 = styled.h1`
  margin: 0 0 12px 0;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  ${typography['Header/H5']}
  @media ${device.laptop} {
    ${typography['Header/H1']}
  }
`;
