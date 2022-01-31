import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { PROJECTS } from '../../../../contents/project';
import { Button } from '../../../common/button';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Projects: VFCX = ({ className }) => (
  <div {...{ className }}>
    {PROJECTS.map((project, i) => (
      <div key={i}>
        <h3>{project.title}</h3>
        <div>{project.description}</div>
      </div>
    ))}
  </div>
);

const StyledProjects = styled(Projects)`
  padding: 5vh 0;
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  gap: 32px;
  width: 100%;

  h3 {
    font-size: 2em;
  }

  a {
    margin-top: 16px;
    width: 100%;
    text-align: center;
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
  }
`;

const Component: VFCX<Props> = ({ className }) => (
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
      <StyledProjects />
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
    width: 95vw;
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

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
