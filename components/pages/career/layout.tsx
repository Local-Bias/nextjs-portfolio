import React, { FCX } from 'react';
import styled from '@emotion/styled';

const Component: FCX = ({ className, children }) => (
  <div {...{ className }}>
    <div className='sidebar'>
      <div className='sticky'>
        <h2>Career</h2>
        <p>今までの職歴と、これからやりたいこと</p>
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
      color: #fff;
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

      p {
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
