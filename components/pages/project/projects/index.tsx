import React, { VFCX } from 'react';
import styled from '@emotion/styled';
import { Glass } from '../../../common/glass';
import { PROJECTS } from '../../../../contents/project';

import Indicator from './indicator';
import { GlassButton } from '../../../common/glass-button';

const Component: VFCX = ({ className }) => (
  <div {...{ className }}>
    {PROJECTS.map((project, i) => (
      <div key={i}>
        <Glass>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {!!project.link && (
            <div className='link'>
              <a href={project.link} target='_blank' rel='nofollow noopener noreferrer'>
                <GlassButton>{project.linkLabel || 'Label'}</GlassButton>
              </a>
            </div>
          )}
        </Glass>
        <div className='project-property'>
          {!!project.indicators &&
            project.indicators.map((indicator, j) => <Indicator key={j} indicator={indicator} />)}
        </div>
      </div>
    ))}
  </div>
);

const StyledComponent = styled(Component)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  gap: 32px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: streach;

    > div {
      &:nth-of-type(1) {
        margin-bottom: -15%;
        padding: 32px;
        padding-bottom: calc(15% + 32px);

        > .link {
          width: 100%;
          text-align: center;
        }
      }

      &:nth-of-type(2) {
        padding: 0 0 32px 32px;
        display: flex;
        justify-content: flex-end;
        gap: 16px;
      }
    }
  }
`;

export default StyledComponent;
