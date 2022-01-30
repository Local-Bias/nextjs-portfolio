import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { NAME } from '../../../../static/me';

import Indicators from './indicators-offline';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <div>
      <div className='introduction'>
        <div className='job-title'>
          <div>web developer</div>
          <div>open source contributor</div>
        </div>
        <h1>
          <div className='name'>{NAME}</div>
          <div>influence</div>
        </h1>
      </div>
    </div>
    <div>
      <Indicators />
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  padding-left: 100px;
  display: grid;
  grid-template-columns: 40vw 1fr;
  height: 100vh;
  color: #012d;
  background-color: #f2f6ff;

  .job-title {
    writing-mode: vertical-rl;
    opacity: 0.7;
  }

  .introduction {
    display: flex;
    justify-content: flex-start;
    gap: 32px;
  }

  .name {
    font-size: 100px;
    line-height: 1em;
  }

  h1 {
    margin: 0;
  }

  > div {
    &:nth-of-type(1) {
      display: flex;
      flex-direction: column;

      padding: 10vh 32px;

      font-size: 3vmin;

      button {
        border: 0;
        border-radius: 100px;
        background: linear-gradient(45deg, #00cb8f, #10cb8f);
        color: #fff;
        padding: 2em 3em;
        box-shadow: 0 10px 10px -5px #0001, 0 12px 15px -8px #0001, 0 20px 20px -10px #0001;
      }
    }
    &:nth-of-type(2) {
    }
  }
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
