import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { Indicator } from '../../../../contents/project';
import { Glass } from '../../../common/glass';

type ContainerProps = Readonly<{ indicator: Indicator }>;
type Props = ContainerProps & Readonly<{}>;

const Component: VFCX<Props> = ({ className, indicator }) => (
  <Glass {...{ className }} depth={0}>
    <div className='title'>
      <h4>{indicator.value.toLocaleString()}</h4>
      <span className='unit'>{indicator.unit}</span>
    </div>
    {indicator.description}
  </Glass>
);

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  max-width: 50%;
  @media (max-width: 1200px) {
    padding: 2vmin;
    gap: 2vmin;
  }

  > .title {
    display: flex;
    align-items: flex-end;
    gap: 8px;

    h4 {
      font-size: 2em;
      margin: 0;
      padding: 0;
    }
    .unit {
      font-size: 1em;
    }
  }
`;

const Container: VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
