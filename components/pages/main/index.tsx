import React, { VFC } from 'react';

import BackgroundImage from './background-image';
import Introduction from './introduction';
import Skill from './skill';
import Project from './project';
import Career from './career';

const Component: VFC = () => (
  <>
    <BackgroundImage />
    <Introduction />
    <Skill />
    <Project />
    <Career />
  </>
);
export default Component;
