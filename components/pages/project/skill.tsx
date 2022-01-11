import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { Glass } from '../../common/glass';
import { GlassButton } from '../../common/glass-button';
import Link from 'next/link';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <div className='contents'>
      <div className='title'>
        <div>
          <h2>Skills and Tools</h2>
        </div>
        <Link href='/skill/'>
          <GlassButton>Details</GlassButton>
        </Link>
      </div>
      <div className='items'>
        <Glass>TypeScript</Glass>
        <Glass>React</Glass>
        <Glass>TypeScript</Glass>
        <Glass>TypeScript</Glass>
        <Glass>TypeScript</Glass>
        <Glass>TypeScript</Glass>
      </div>
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  min-height: 100vh;
  padding: 5vh 0;

  .contents {
    display: flex;
    flex-direction: row-reverse;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
    align-items: center;
    width: 95vw;
    margin: auto;
    gap: 32px;

    > div {
      width: 100%;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10vh;

    > div {
      filter: drop-shadow(0 2px 3px #0005);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  svg {
    fill: #fffc;
    width: 100px;
  }

  h2 {
    font-size: 3em;
    color: #fffc;
    flex: 1 1 auto;
    width: 100%;
    text-align: center;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10vh;

  .items {
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    width: 100%;

    > div {
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
