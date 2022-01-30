import React, { VFC } from 'react';
import imageData from '../../../public/images/cactuses.jpg';

import ATB from './atf';
import Skill from './skill';
import Project from './project';
import Career from './career';
import { BackgroundImage } from '../../common/background-image';
import { useSetRecoilState } from 'recoil';
import { currentPageState } from '../../../states/current-page';

const Component: VFC = () => (
  <>
    <BackgroundImage imageData={imageData} />
    <ATB />
    <Skill />
    <Project />
    <Career />
  </>
);

const Container: VFC = () => {
  const setCurrentPage = useSetRecoilState(currentPageState);
  setCurrentPage('Home');

  return <Component />;
};

export default Container;
