import React, { VFCX } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

type Props = Readonly<{ imageData: StaticImageData }>;

const Component: VFCX<Props> = ({ className, imageData }) => (
  <div {...{ className }}>
    <Image
      src={imageData}
      alt='background-image'
      layout='fill'
      objectFit='cover'
      placeholder='blur'
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
  background: linear-gradient(to right, #3453, #3455, #3453),
    radial-gradient(circle at top left, #3455 30%, #3451 50%),
    radial-gradient(circle at bottom right, #3455 20%, #3451 30%);
`;

export const BackgroundImage = StyledComponent;
