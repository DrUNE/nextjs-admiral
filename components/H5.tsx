import styled from 'styled-components';
import { device } from 'components/Layout/device';
import { typography } from '@admiral-ds/react-ui';

export const H5 = styled.h5`
  margin: 60px 0 12px 0;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  ${typography['Header/H6']}
  @media ${device.laptop} {
    ${typography['Header/H5']}
  }
`;
