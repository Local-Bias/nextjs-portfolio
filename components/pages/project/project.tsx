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
        <h2>Projects</h2>
        <Link href='/skill/'>
          <GlassButton>Details</GlassButton>
        </Link>
      </div>
      <div className='items'>
        <Glass>
          <h3>このサイト</h3>
          <div>
            以前はGatsby.jsで作成していましたが、デザインを一新するタイミングでNext.jsに変更しました。
            グラスモーフィズムを中心にデザインを考えてみました。 デプロイはVercelです。
          </div>
        </Glass>
        <Glass>
          <h3>Kintoneプラグイン</h3>
          <p>
            株式会社サイボウズの提供しているクラウドサービス「Kintone」で利用可能なプラグインを開発しています。
            導入実績は2022年1月に200社を超えました。
          </p>
        </Glass>
        <Glass>
          <h3>ブログ</h3>
          <p>
            ホスティングはGatsbyCloud、コンテンツ管理はContentful、プログラムはGithubという構成で作成。
          </p>
        </Glass>
        <Glass>
          <h3>チャットボット</h3>
          <p>
            経験があるのは、Chatwork × Google Apps Scriptといういびつな構成。 ChatworkのWeb
            hookをGASで取得して、対応するメッセージをPOSTするという方法で実装していました。
          </p>
        </Glass>
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
  }

  h2 {
    font-size: 3em;
    color: #fffc;
    filter: drop-shadow(0 2px 3px #0005);
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
    grid-template-columns: repeat(2, 1fr);
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
