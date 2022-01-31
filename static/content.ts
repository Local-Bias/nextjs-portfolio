export type Skill = {
  name: string;
  description: string;
  children?: Skill[];
};

export const SKILLS: Skill[] = [
  {
    name: '言語',
    description: '',
    children: [
      {
        name: 'TypeScript',
        description: '1日で触れている時間が最も長いのがこの言語です。',
        children: [
          { name: 'React', description: '' },
          { name: 'Next.js', description: '' },
          { name: 'Gatsby.js', description: '現在も更新中のブログは、Gatsby.jsで作成しました。' },
        ],
      },
      { name: 'JavaScript', description: 'TypeScriptが使えるのであれば、TypeScriptを使います。' },
      { name: 'Node.js', description: '開発環境' },
      {
        name: 'Java',
        description: '前職であるシステム開発会社に勤務していた際、主に使用していた言語です。',
      },
      {
        name: 'HTML',
        description: '',
        children: [{ name: 'Pug', description: '' }],
      },
      {
        name: 'CSS',
        description: '',
        children: [
          { name: 'SCSS', description: '' },
          { name: 'Sass', description: '' },
        ],
      },
      { name: 'VBA', description: '' },
    ],
  },
  {
    name: 'データベース',
    description: '',
    children: [
      { name: 'db2', description: '前職でJavaと併せて、バックエンド開発に使用していました。' },
    ],
  },
  {
    name: 'ツール',
    description: '',
    children: [
      { name: 'VSCode', description: '' },
      { name: 'Docker', description: '' },
      { name: 'Git', description: '' },
      { name: 'Firebase', description: '' },
    ],
  },
];

export type Service = {
  title: string;
  description: string;
  imageName?: string;
};

export const SERVICES: Service[] = [
  {
    title: 'ウェブサイト制作',
    description:
      '企業サイト、個人ブログ、LPなど、Webサイト制作全般に経験があります。高速でSEOを意識したサイト制作が可能です。',
    imageName: 'programming.jpg',
  },
  {
    title: 'ウェブアプリ開発',
    description:
      'フロントエンド・バックエンドともに開発経験があるため、データベースやAPIを活用したウェブアプリケーションの開発が可能です。',
    imageName: 'programming.jpg',
  },
  {
    title: '自動化ツール・シナリオ作成',
    description:
      'クラウド・オンプレミス問わず、ソフトウェアを使用するPC上の業務を自動化するためのシナリオ作成とツール開発が可能です。',
    imageName: 'programming.jpg',
  },
  {
    title: '業務効率化',
    description:
      '税理士法人に所属し、多くの関与先法人の社内IT環境を検討・改善した経験から、経理・人事労務・請求業務の効率化するためのサービスの選定・導入サポートが可能です。',
    imageName: 'programming.jpg',
  },
];
