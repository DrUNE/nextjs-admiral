import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';
import FaceIDOutlineUrl, {
  ReactComponent as FaceIDOutlineComponent,
} from '@admiral-ds/icons/build/security/FaceIDOutline.svg';

const Title = styled(T)`
  color: red;
`;

const FaceIDOutline = styled(FaceIDOutlineComponent)`
  path {
    fill: ${(p) => p.theme.color['Attention/Attention 40']};
  }
`;

export default function Home() {
  return (
    <>
      <Title font="Main/XXL">My page</Title>
      <FaceIDOutline width={100} />
      <img src={FaceIDOutlineUrl} width={100} />
    </>
  );
}
