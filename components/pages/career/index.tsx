import React, { VFC } from 'react';
import imageData from '../../../public/images/career.jpg';

import Layout from './layout';
import { BackgroundImage } from '../../common/background-image';
import { useSetRecoilState } from 'recoil';
import { currentPageState } from '../../../states/current-page';

const Component: VFC = () => (
  <>
    <BackgroundImage imageData={imageData} />
    <Layout></Layout>
  </>
);

const Container: VFC = () => {
  const setCurrentPage = useSetRecoilState(currentPageState);
  setCurrentPage('Career');

  return <Component />;
};

export default Container;
