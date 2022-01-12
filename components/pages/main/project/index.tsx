import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { Glass } from '../../../common/glass';
import { GlassButton } from '../../../common/glass-button';
import Link from 'next/link';
import { PROJECTS } from '../../../../contents/project';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <div className='contents'>
      <div className='title'>
        <div>
          <h2>Projects</h2>
          <Link href='/project/'>
            <GlassButton disabled>詳細ページは準備中です</GlassButton>
          </Link>
        </div>
      </div>
      <div className='items'>
        {PROJECTS.map((project, i) => (
          <Glass key={i}>
            <h3>{project.title}</h3>
            <div>{project.description}</div>
          </Glass>
        ))}
        <Glass>
          <h3>旧ポートフォリオ</h3>
          <div>
            このサイトを作成する前のポートフォリオサイトです。Gatsby.jsで作成、GitHubでリポジトリ管理、netlifyでデプロイを行いました。
          </div>
          <a href='https://ribbitlify.netlify.app' target='_blank'>
            <GlassButton>実際のサイトはこちら</GlassButton>
          </a>
        </Glass>
      </div>
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  min-height: 100vh;

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
    font-size: 3em;
    color: #fffc;
    filter: drop-shadow(0 2px 3px #0005);
    width: 100%;
    text-align: center;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10vh;

  .items {
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

      > div {
        filter: drop-shadow(0 1px 2px #000a);
      }
    }
  }
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
