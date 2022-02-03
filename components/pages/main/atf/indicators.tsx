import React, { VFCX } from 'react';
import styled from '@emotion/styled';
import useSWR from 'swr';

import { CircularProgress } from '@mui/material';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{ indicators: Indicator[] }>;

const OFFLINE_INDICATORS = [
  { number: 330, unit: 'companies' },
  { number: 455161, unit: 'actions' },
  { number: 5200, unit: 'persons/month' },
];

const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

const Indicator: VFCX<{ indicator: Indicator }> = ({ className, indicator }) => (
  <div {...{ className }}>
    <div>{indicator.number.toLocaleString()}</div>
    <div>{indicator.unit}</div>
  </div>
);

const StyledIndicator = styled(Indicator)`
  display: flex;
  align-items: flex-end;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
  gap: 8px;
  animation: appear 250ms ease;

  > div {
    font-weight: 600;
    line-height: 1.05;
    &:nth-of-type(1) {
      font-size: 120px;
      @media (max-width: 800px) {
        font-size: 100px;
      }
      @media (max-width: 600px) {
        font-size: 80px;
      }
      font-weight: 600;
      color: #acb6e5;
      background: linear-gradient(15deg, #acb6e5, #64bde4); //背景色にグラデーションを指定
      background-clip: text;
      text-fill-color: transparent;
    }
    &:nth-of-type(2) {
      font-size: 60px;
      @media (max-width: 800px) {
        font-size: 50px;
      }
      @media (max-width: 600px) {
        font-size: 40px;
      }
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Component: VFCX<ContainerProps> = ({ className }) => {
  const { data, error } = useSWR<Indicator[]>('/api/gas-bridge', fetcher);

  if (error) {
    return (
      <div {...{ className }}>
        {OFFLINE_INDICATORS.map((indicator, i) => (
          <StyledIndicator key={i} indicator={indicator} />
        ))}
      </div>
    );
  }

  if (!data) {
    return (
      <div {...{ className }}>
        <CircularProgress sx={{ color: '#acb6e5' }} />
      </div>
    );
  }

  const indicators = data || [];

  return (
    <div {...{ className }}>
      {[...indicators, { number: 5200, unit: 'persons/month' }].map((indicator, i) => (
        <StyledIndicator key={i} indicator={indicator} />
      ))}
    </div>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 60vh;
  justify-content: space-around;
`;

export default StyledComponent;
