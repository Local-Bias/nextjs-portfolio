import React, { VFC } from 'react';
import imageData from '../../../public/images/skill.jpg';

import Layout from './layout';
import Charts from './charts';
import Qualifications from './qualifications';
import { BackgroundImage } from '../../common/background-image';

const Component: VFC = () => (
  <>
    <BackgroundImage imageData={imageData} />
    <Layout>
      <Qualifications />
      <Charts />
    </Layout>
  </>
);

export default Component;
