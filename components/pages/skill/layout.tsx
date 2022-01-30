import React, { FCX } from 'react';
import styled from '@emotion/styled';

const Component: FCX = ({ className, children }) => (
  <div {...{ className }}>
    <div className='sidebar'>
      <div className='sticky'>
        <h2>Skill</h2>
        <p>習得している技術とその活用期間を紹介します</p>
      </div>
    </div>
    <div className='content'>{children}</div>
  </div>
);

const StyledComponent = styled(Component)`
  padding-left: 100px;
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
        color: #fff;
        font-size: 64px;
        @media (max-width: 900px) {
          font-size: 32px;
          margin: 0;
        }
      }

      p {
        color: #fff;
        filter: drop-shadow(0 1px 2px #0005);
      }
    }
  }

  .content {
    flex: 1;
    padding: 5vh 3vw;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export default StyledComponent;
