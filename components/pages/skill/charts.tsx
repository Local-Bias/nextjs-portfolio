import React, { VFCX } from 'react';
import styled from '@emotion/styled';
import { DateTime, Interval } from 'luxon';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Glass } from '../../common/glass';

type Row = {
  name: string;
  motivation: 0 | 2 | 4 | 6 | 8 | 10;
  category: string;
  from: DateTime;
  experience: number;
  icon?: string;
  emoji?: string;
};

const ROWS: Row[] = [
  {
    name: 'TypeScript',
    motivation: 10,
    category: '言語',
    from: DateTime.local(2021, 2, 1),
    experience: 0,
  },
  {
    name: 'JavaScript',
    motivation: 8,
    category: '言語',
    from: DateTime.local(2020, 1, 1),
    experience: 3,
  },
  {
    name: 'React',
    motivation: 10,
    category: 'ライブラリ',
    from: DateTime.local(2021, 1, 1),
    experience: 0,
  },
  {
    name: 'VSCode',
    motivation: 10,
    category: 'ツール',
    from: DateTime.local(2020, 8, 1),
    experience: 0,
  },
  {
    name: 'emotion',
    motivation: 8,
    category: 'ライブラリ',
    from: DateTime.local(2021, 2, 1),
    experience: 0,
  },
  {
    name: 'Webpack',
    motivation: 8,
    category: 'ライブラリ',
    from: DateTime.local(2020, 6, 1),
    experience: 0,
  },
  {
    name: 'Git',
    motivation: 8,
    category: 'ツール',
    from: DateTime.local(2020, 7, 1),
    experience: 0,
  },
  {
    name: 'playwright',
    motivation: 6,
    category: 'ライブラリ',
    from: DateTime.local(2021, 2, 1),
    experience: 0,
  },
  {
    name: 'HTML5',
    motivation: 6,
    category: '言語',
    from: DateTime.local(2020, 1, 1),
    experience: 3,
  },
  {
    name: 'CSS3',
    motivation: 2,
    category: '言語',
    from: DateTime.local(2020, 1, 1),
    experience: 3,
  },
  {
    name: 'VBA',
    motivation: 0,
    category: '言語',
    from: DateTime.local(2020, 1, 1),
    experience: 0,
  },
  {
    name: 'Java',
    motivation: 2,
    category: '言語',
    from: DateTime.local(2020, 1, 1),
    experience: 3,
  },
  {
    name: 'Pug',
    motivation: 6,
    category: 'ライブラリ',
    from: DateTime.local(2020, 1, 1),
    experience: 0,
  },
  {
    name: 'SCSS',
    motivation: 6,
    category: 'ライブラリ',
    from: DateTime.local(2020, 1, 1),
    experience: 0,
  },
  {
    name: 'SASS',
    motivation: 2,
    category: 'ライブラリ',
    from: DateTime.local(2020, 1, 1),
    experience: 3,
  },
  {
    name: 'JQuery',
    motivation: 0,
    category: 'ライブラリ',
    from: DateTime.local(2020, 1, 1),
    experience: 1,
  },
  {
    name: 'puppeteer',
    motivation: 2,
    category: 'ライブラリ',
    from: DateTime.local(2020, 1, 1),
    experience: 1,
  },
  {
    name: 'DB2',
    motivation: 2,
    category: 'データベース',
    from: DateTime.local(2020, 1, 1),
    experience: 2,
  },
];

const getExperienceChartDatas = () => {
  return ROWS.map((row) => {
    const interval = row.experience
      ? Interval.fromDateTimes(DateTime.local().minus({ year: row.experience }), DateTime.local())
      : Interval.fromDateTimes(row.from, DateTime.local());

    const oneYearsMillis = Interval.fromDateTimes(
      DateTime.local().minus({ year: 1 }),
      DateTime.local()
    )
      .toDuration()
      .toMillis();

    const experienceLabel = row.experience
      ? `${row.experience}年以上`
      : oneYearsMillis > interval.toDuration().toMillis()
      ? interval.toDuration().toFormat('Mヵ月')
      : interval.toDuration().toFormat('y年Mヵ月');
    const experienceMillis = interval.toDuration().toMillis();

    const threeYearsMillis = Interval.fromDateTimes(
      DateTime.local().minus({ year: 3 }),
      DateTime.local()
    )
      .toDuration()
      .toMillis();

    let experienceResidue = 0;
    if (threeYearsMillis - experienceMillis > 0) {
      experienceResidue = threeYearsMillis - experienceMillis;
    }

    let motivationLabel = '';
    switch (row.motivation) {
      case 0: {
        motivationLabel = '他の技術で代用したい🙈';
        break;
      }
      case 2: {
        motivationLabel = 'あまり触れる機会がない🍂';
        break;
      }
      case 4: {
        motivationLabel = 'あまり触れる機会がない🍂';
        break;
      }
      case 6: {
        motivationLabel = '活用してきたい🦔';
        break;
      }
      case 8: {
        motivationLabel = '楽しい🐇';
        break;
      }
      case 10: {
        motivationLabel = '超楽しい🐸';
        break;
      }
    }

    return {
      ...row,
      experienceLabel,
      experienceMillis,
      experienceResidue,
      motivationLabel,
    };
  });
};

const Component: VFCX = ({ className }) => (
  <div className={className}>
    {getExperienceChartDatas().map((row) => (
      <Glass className='item'>
        <div className='center'>
          <div className='icon'>{row.emoji && row.emoji}</div>
          <div className='name'>{row.name}</div>
        </div>
        <div className='chart'>
          <PieChart width={200} height={200}>
            <defs>
              <linearGradient id='gradationColor' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='#8ec5fcdd' />
                <stop offset='100%' stopColor='#e0c3fcdd' />
              </linearGradient>
            </defs>
            <Pie
              strokeOpacity={0.6}
              data={[
                { name: row.motivationLabel, value: row.motivation },
                { name: row.motivationLabel, value: 10 - row.motivation },
              ]}
              cx='50%'
              cy='50%'
              startAngle={180}
              endAngle={0}
              innerRadius={50}
              outerRadius={70}
              paddingAngle={0}
              dataKey='value'
            >
              <Cell fill='url(#gradationColor)' />
              <Cell fill='transparent' />
            </Pie>
            <Pie
              strokeOpacity={0.6}
              data={[
                {
                  name: row.experienceLabel,
                  value: row.experienceMillis,
                },
                {
                  name: row.experienceLabel,
                  value: row.experienceResidue,
                },
              ]}
              cx='50%'
              cy='50%'
              startAngle={180}
              endAngle={360}
              innerRadius={50}
              outerRadius={70}
              paddingAngle={0}
              dataKey='value'
            >
              <Cell fill='url(#gradationColor)' />
              <Cell fill='transparent' />
            </Pie>
            <Tooltip
              contentStyle={{
                border: '0',
                backdropFilter: 'blur(8px)',
                backgroundColor: '#8ec5fcdd',
                boxShadow:
                  'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px',
              }}
              itemStyle={{ color: '#fff' }}
              formatter={() => ''}
              isAnimationActive={false}
              separator=''
            />
          </PieChart>
        </div>
      </Glass>
    ))}
  </div>
);

const StyledComponent = styled(Component)`
  color: #fff;

  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 32px;
  justify-content: center;
  padding: 32px 0;

  & > .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.3em;
    min-width: 200px;
    min-height: 200px;
    line-height: 1.5em;
    position: relative;

    & > .name,
    & > .date {
      font-size: 75%;
    }

    & > .chart,
    & > .chart:before,
    & > .date {
      position: absolute;
    }

    & > .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 75%;
      & > .icon {
        font-size: 36px;
      }
    }

    & > .chart {
      top: 0;
    }
    & > .icon {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    & > .name {
      top: 95px;
    }
    & > .date {
      top: 120px;
    }
  }
`;

export default StyledComponent;
