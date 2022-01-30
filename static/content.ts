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
