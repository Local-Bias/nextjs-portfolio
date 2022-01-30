import React, { VFC } from 'react';
import imageData from '../../../public/images/skill.jpg';

import Layout from './layout';
import Charts from './charts';
import Qualifications from './qualifications';
import { BackgroundImage } from '../../common/background-image';
import { useSetRecoilState } from 'recoil';
import { currentPageState } from '../../../states/current-page';

const Component: VFC = () => (
  <>
    <BackgroundImage imageData={imageData} />
    <Layout>
      <Qualifications />
      <Charts />
    </Layout>
  </>
);

const Container: VFC = () => {
  const setCurrentPage = useSetRecoilState(currentPageState);
  setCurrentPage('Skill');

  return <Component />;
};

export default Container;
