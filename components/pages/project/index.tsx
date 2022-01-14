import React, { VFC } from 'react';
import imageData from '../../../public/images/project.jpg';

import Layout from './layout';
import Charts from './projects';
import { BackgroundImage } from '../../common/background-image';

const Component: VFC = () => (
  <>
    <BackgroundImage imageData={imageData} />
    <Layout>
      <Charts />
    </Layout>
  </>
);

export default Component;
