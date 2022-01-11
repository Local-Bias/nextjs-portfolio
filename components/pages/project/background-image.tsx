import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <Image
      src='/images/project.jpg'
      alt='first-view'
      width={2400}
      height={1350}
      layout='fill'
      objectFit='cover'
      quality={100}
    />
  </div>
);

const StyledComponent = styled(Component)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  background: radial-gradient(circle at top left, #0002 30%, #0001 50%),
    radial-gradient(circle at bottom right, #0002 20%, #0001 30%);
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
