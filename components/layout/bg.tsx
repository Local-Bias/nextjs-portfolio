import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { backgroundImageState } from '../../states/background-image';
import { BackgroundImage } from '../common/background-image';
import Image from 'next/image';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{ backgroundImage: StaticImageData | null }>;

const Component: VFCX<Props> = ({ className, backgroundImage }) => (
  <div {...{ className }}>
    {!!backgroundImage && (
      <Image
        src={backgroundImage}
        alt='background-image'
        layout='fill'
        objectFit='cover'
        placeholder='blur'
        quality={100}
      />
    )}
  </div>
);

const StyledComponent = styled(Component)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;

const Container: VFC<ContainerProps> = () => {
  const backgroundImage = useRecoilValue(backgroundImageState);

  return <StyledComponent {...{ backgroundImage }} />;
};

export default Container;
