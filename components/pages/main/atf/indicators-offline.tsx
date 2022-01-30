import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{ indicators: Indicator[] }>;

const Component: VFCX<ContainerProps> = ({ className }) => {
  const indicators = [
    { number: 282, unit: 'companies' },
    { number: 432414, unit: 'actions' },
    { number: 5200, unit: 'persons/month' },
  ];

  return (
    <div {...{ className }}>
      {indicators.map((indicator, i) => (
        <div key={i}>
          <div>{indicator.number.toLocaleString()}</div>
          <div>{indicator.unit}</div>
        </div>
      ))}
    </div>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    padding: 32px;
    font-size: 5vmin;
    display: flex;
    align-items: flex-end;
    gap: 8px;

    > div {
      font-weight: 600;
      &:nth-of-type(1) {
        font-size: 6vw;
        font-weight: 600;
        color: #00cb8f;
      }
      &:nth-of-type(2) {
        font-size: 3vw;
      }
    }
  }
`;

export default StyledComponent;
