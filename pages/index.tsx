import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';
import Link from 'next/link';

import FaceIDOutlineUrl, {
  ReactComponent as FaceIDOutlineComponent,
} from '@admiral-ds/icons/build/security/FaceIDOutline.svg';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Title = styled(T)`
  color: red;
`;

const FaceIDOutline = styled(FaceIDOutlineComponent)`
  path {
    fill: ${(p) => p.theme.color['Attention/Attention 40']};
  }
`;

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/documentation/button');
  }, []);
  return (
    <>
      <Title font="Main/XXL">My page</Title>
      <FaceIDOutline width={100} />
      <img src={FaceIDOutlineUrl} width={100} />
      <h1 className="title">
        Read{' '}
        <Link href="/documentation/button">
          <a>this page!</a>
        </Link>
      </h1>
    </>
  );
}
