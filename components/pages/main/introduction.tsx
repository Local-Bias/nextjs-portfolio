import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { Glass } from '../../common/glass';
import { GlassButton } from '../../common/glass-button';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <Glass className='introduction'>
      <div>
        <h1>Ribbit</h1>
        <p>Front-End Engineer. Open source contributor</p>
      </div>
      <div className='contact-button'>
        <GlassButton disabled>Contact</GlassButton>
      </div>
    </Glass>
  </div>
);

const StyledComponent = styled(Component)`
  position: relative;
  height: 100vh;
  overflow: hidden;

  .contact-button {
    height: 100%;
    display: flex;
    align-items: flex-end;
  }

  .introduction {
    position: absolute;
    right: 3vw;
    bottom: calc(5vh + 64px);

    width: 50%;
    height: 50%;
    padding: 64px;
    @media (max-width: 1200px) {
      right: 0;
      width: 90vw;
      padding: 5vw;
      border-radius: 0;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
    }

    transition: all 250ms ease;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1,
    p {
      color: #fff;
    }

    h1 {
      font-size: 60px;
    }
  }
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
