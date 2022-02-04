import React, { VFCX } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Button } from '../../../common/button';

import Projects from './projects';

const Component: VFCX = ({ className }) => (
  <div {...{ className }}>
    <div className='contents'>
      <div className='title'>
        <div>
          <h2>Projects</h2>
          <Link href='/project/'>
            <Button>Details</Button>
          </Link>
        </div>
      </div>
      <Projects />
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  min-height: 100vh;
  background-color: #fff;
  color: #123d;

  .contents {
    display: flex;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
    width: 1600px;
    max-width: 95vw;
    margin: auto;
    gap: 32px;

    > div {
      width: 100%;
    }
  }

  .title {
    > div {
      height: 100vh;
      @media (max-width: 1000px) {
        height: auto;
      }
      position: sticky;
      top: 0;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10vh;
    }
  }

  h2 {
    font-size: 60px;
    width: 100%;
    text-align: center;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10vh;
`;

export default StyledComponent;
