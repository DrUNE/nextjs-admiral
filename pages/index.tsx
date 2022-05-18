import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';

const Title = styled(T)`
  color: red;
`;

export default function Home() {
  return (
    <>
      <Title font="Main/XXL">My page</Title>
    </>
  );
}
