import React, { VFCX } from 'react';
import styled from '@emotion/styled';
import { Glass } from '../../common/glass';

const Component: VFCX = ({ className }) => (
  <Glass className={className}>
    <h3>資格</h3>
    <div>
      <p>日商簿記2級</p>
      <p>2級ファイナンシャルプランニング技能士</p>
    </div>
  </Glass>
);

const StyledComponent = styled(Component)`
  padding: 64px;
  h3 {
    font-size: 48px;
  }

  p {
    filter: drop-shadow(0 1px 3px #0005);
  }
`;

export default StyledComponent;
