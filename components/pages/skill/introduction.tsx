import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { Glass } from '../../common/glass';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <Glass className='introduction'>
      <h1>Skill</h1>
      <p>習得している技術とその活用期間を紹介します</p>
    </Glass>
  </div>
);

const StyledComponent = styled(Component)`
  position: relative;
  height: 100vh;
  overflow: hidden;
  .introduction {
    position: absolute;
    right: 72px;
    bottom: 10%;

    width: 50%;
    height: 50%;
    @media (max-width: 1200px) {
      right: 6vw;
      width: 88vw;
    }

    transition: all 250ms ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 64px;

    h1,
    p {
      filter: drop-shadow(0 1px 3px #0007);
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
