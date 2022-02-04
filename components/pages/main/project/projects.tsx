import React, { VFCX } from 'react';
import styled from '@emotion/styled';
import { PROJECTS } from '../../../../contents/project';

const Component: VFCX = ({ className }) => (
  <div {...{ className }}>
    {PROJECTS.map((project, i) => (
      <div key={i}>
        <h3>{project.title}</h3>
        <div>{project.description}</div>
      </div>
    ))}
  </div>
);

const StyledComponent = styled(Component)`
  padding: 5vh 0;
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  gap: 32px;
  width: 100%;

  h3 {
    font-size: 2em;
  }

  a {
    margin-top: 16px;
    width: 100%;
    text-align: center;
  }

  > div {
    padding: 36px;
    @media (max-width: 1200px) {
      padding: 3vw;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default StyledComponent;
