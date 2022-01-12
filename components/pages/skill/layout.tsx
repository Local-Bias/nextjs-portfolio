import React, { FCX } from 'react';
import styled from '@emotion/styled';
import { Glass } from '../../common/glass';

const Component: FCX = ({ className, children }) => (
  <div {...{ className }}>
    <div className='sidebar'>
      <Glass className='sticky'>
        <h2>Skill</h2>
        <p>習得している技術とその活用期間を紹介します</p>
      </Glass>
    </div>
    <div className='content'>{children}</div>
  </div>
);

const StyledComponent = styled(Component)`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  min-height: 100vh;

  .sidebar {
    min-width: 300px;
    width: 30%;
    @media (max-width: 900px) {
      width: 100%;
    }

    .sticky {
      position: sticky;
      top: 0;
      height: 100vh;
      padding: 10%;
      @media (max-width: 900px) {
        height: 60px;
        padding: 5px 5vw;
        display: flex;
        align-items: center;
        gap: 32px;
      }
      border-radius: 0;

      h2 {
        font-size: 64px;
        @media (max-width: 900px) {
          font-size: 32px;
          margin: 0;
        }
      }
    }
  }

  .content {
    flex: 1;
    padding: 5vh 3vw;
  }
`;

export default StyledComponent;
