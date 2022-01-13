import React, { VFC } from 'react';
import imageData from '../../../public/images/cactuses.jpg';

import Introduction from './introduction';
import Skill from './skill';
import Project from './project';
import Career from './career';
import { BackgroundImage } from '../../common/background-image';

const Component: VFC = () => (
  <>
    <BackgroundImage imageData={imageData} />
    <Introduction />
    <Skill />
    <Project />
    <Career />
  </>
);
export default Component;
