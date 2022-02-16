import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { NAME } from '../../../../static/me';

import Indicators from './indicators';

type ContainerProps = Readonly<{ indicators: Indicator[] }>;
type Props = ContainerProps & Readonly<{}>;

const Introduction: VFCX = ({ className }) => (
  <div {...{ className }}>
    <div className='job-title'>
      <div>web developer</div>
      <div>open source contributor</div>
    </div>
    <h1>
      <div className='name'>{NAME}</div>
      <div>had an influence on</div>
    </h1>
  </div>
);

const StyledIntroduction = styled(Introduction)`
  display: flex;
  justify-content: flex-start;
  gap: 32px;
  @media (max-width: 800px) {
    gap: 4vw;
  }

  > div {
    &:nth-of-type(1) {
      writing-mode: vertical-rl;
      font-size: 30px;
      opacity: 0.7;
      line-height: 1.1;
    }
  }

  h1 {
    margin: 0;

    > div {
      &:nth-of-type(1) {
        font-size: 100px;
        line-height: 1em;
      }
      &:nth-of-type(2) {
        font-size: 50px;
      }
    }
  }

  button {
    border: 0;
    border-radius: 100px;
    background: linear-gradient(45deg, #00cb8f, #10cb8f);
    color: #fff;
    padding: 2em 3em;
    box-shadow: 0 10px 10px -5px #0001, 0 12px 15px -8px #0001, 0 20px 20px -10px #0001;
  }
`;

const Component: VFCX<Props> = ({ className, indicators }) => (
  <div {...{ className }}>
    <StyledIntroduction />
    <Indicators indicators={indicators} />
  </div>
);

const StyledComponent = styled(Component)`
  padding: 10vh 32px 10vh 132px;
  display: grid;
  gap: 32px;
  grid-template-columns: 40vw 1fr;
  @media (max-width: 800px) {
    padding: 8vh 4vw 8vh 4vw;
    gap: 4vw;
    grid-template-columns: 1fr;
  }
  min-height: 100vh;
  color: #012d;
  background-color: #f2f6ff;
`;

const Container: VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
