import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { Glass } from '../../common/glass';
import { GlassButton } from '../../common/glass-button';
import Link from 'next/link';
import { CAREER } from '../../../contents/career';
import { Button } from '../../common/button';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <div className='contents'>
      <div className='title'>
        <div>
          <h2>Career</h2>
          <Link href='/career/'>
            <Button>詳細ページは準備中です</Button>
          </Link>
        </div>
      </div>
      <div className='items'>
        {CAREER.map((item, i) => (
          <div key={i}>
            <div>{`${item.since.getFullYear()}年${item.since.getMonth() + 1}月～`}</div>
            <h3>{item.name}</h3>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  padding-left: 100px;
  min-height: 100vh;
  background-color: #fff;
  color: #012d;

  .contents {
    display: flex;
    flex-direction: row;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
    width: 90vw;
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
      gap: 7vh;
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

  .items {
    padding: 5vh 0 5vh 60px;
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
    width: 100%;

    background-image: linear-gradient(62deg, #012d 0%, #012d 100%);
    background-size: 10px 100%;

    h3 {
      font-size: 2em;
    }

    > div {
      height: 400px;
      padding: 0 36px;
      @media (max-width: 1200px) {
        padding: 0 3vw;
      }

      display: flex;
      flex-direction: column;
      justify-content: center;

      position: relative;
      :before {
        content: '';
        position: absolute;
        left: -56px;
        top: 50%;
        transform: translate(-50%, -50%);

        background: #012;
        width: 20px;
        height: 150px;
      }
    }
  }
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
