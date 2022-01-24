export type Indicator = {
  value: number;
  unit: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  indicators?: Indicator[];
  link?: string;
  linkLabel?: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'このサイト',
    description:
      '以前はGatsby.jsで作成していましたが、デザインを一新するタイミングでNext.jsに変更しました。グラスモーフィズムを中心にデザインを考えてみました。 デプロイはVercelです。',
    indicators: [
      {
        value: 97,
        unit: '/100点',
        description: 'Google PageSpeed Insightsで計測したモバイル版のサイトパフォーマンス',
      },
    ],
  },
  {
    title: 'Kintoneプラグイン',
    description:
      '株式会社サイボウズの提供しているクラウドサービス「Kintone」で利用可能なプラグインを開発しています。導入実績は2022年1月に200社を超えました。',
    indicators: [
      { value: 233, unit: '社', description: 'ご利用いただいた企業数' },
      { value: 342119, unit: '回', description: 'プラグインが実行された回数' },
    ],
  },
  {
    title: 'ブログ',
    description:
      'ホスティングはGatsbyCloud、コンテンツ管理はContentful、プログラムはGithubという構成で作成。月の閲覧数は5,000程です。',
    indicators: [
      { value: 79, unit: '記事', description: '掲載している記事の数' },
      { value: 5200, unit: 'view/月', description: '月あたりの閲覧数' },
    ],
    link: 'https://ribbit.work',
    linkLabel: 'サイトはこちら',
  },
  {
    title: 'チャットボット',
    description:
      '構成はChatwork × Google Apps Script。 ChatworkのWeb hookをGASで取得して、対応するメッセージをPOSTするという方法で実装していました。',
  },
  {
    title: 'WEBセミナー',
    description:
      'ITを活用した業務効率化をテーマに、中小企業向けのWEBセミナーの講師を担当しました。',
  },
  {
    title: '旧ポートフォリオ',
    description:
      'このサイトを作成する前のポートフォリオサイトです。Gatsby.jsで作成、GitHubでリポジトリ管理、netlifyでデプロイを行いました。',
    link: 'https://ribbitlify.netlify.app',
    linkLabel: 'サイトはこちら',
  },
];
