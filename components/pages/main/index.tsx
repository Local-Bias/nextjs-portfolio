import React, { VFC } from 'react';
import imageData from '../../../public/images/cactuses.jpg';

import ATB from './atf';
import Skill from './skill';
import Project from './project';
import Career from './career';
import Service from './service';
import { BackgroundImage } from '../../common/background-image';
import { useSetRecoilState } from 'recoil';
import { currentPageState } from '../../../states/current-page';

type Props = Readonly<{ indicators: Indicator[] }>;

const Component: VFC<Props> = ({ indicators }) => (
  <>
    <BackgroundImage imageData={imageData} />
    <ATB indicators={indicators} />
    <Service />
    <Project />
    <Skill />
    <Career />
  </>
);

const Container: VFC<Props> = (props) => {
  const setCurrentPage = useSetRecoilState(currentPageState);
  setCurrentPage('Home');

  return <Component {...props} />;
};

export default Container;
