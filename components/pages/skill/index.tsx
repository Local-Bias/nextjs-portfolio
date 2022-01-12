import React, { VFC } from 'react';

import Layout from './layout';
import BackgroundImage from './background-image';
import Charts from './charts';
import Qualifications from './qualifications';

const Component: VFC = () => (
  <>
    <BackgroundImage />
    <Layout>
      <Qualifications />
      <Charts />
    </Layout>
  </>
);

export default Component;
