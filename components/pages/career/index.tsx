import React, { VFC } from 'react';
import imageData from '../../../public/images/career.jpg';

import Layout from './layout';
import { BackgroundImage } from '../../common/background-image';

const Component: VFC = () => (
  <>
    <BackgroundImage imageData={imageData} />
    <Layout></Layout>
  </>
);

export default Component;
