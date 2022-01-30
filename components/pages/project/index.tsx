import React, { VFC } from 'react';
import imageData from '../../../public/images/project.jpg';

import Layout from './layout';
import Charts from './projects';
import { BackgroundImage } from '../../common/background-image';
import { useSetRecoilState } from 'recoil';
import { currentPageState } from '../../../states/current-page';

const Component: VFC = () => (
  <>
    <BackgroundImage imageData={imageData} />
    <Layout>
      <Charts />
    </Layout>
  </>
);

const Container: VFC = () => {
  const setCurrentPage = useSetRecoilState(currentPageState);
  setCurrentPage('Project');

  return <Component />;
};

export default Container;
