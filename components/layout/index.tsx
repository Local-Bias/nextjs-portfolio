import React, { FCX, VFC } from 'react';
import styled from '@emotion/styled';

import GlobalNav from './global-nav';
import Footer from './footer';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Component: FCX<Props> = ({ className, children }) => (
  <div {...{ className }}>
    <GlobalNav />
    <main>{children}</main>
    <Footer />
  </div>
);

const StyledComponent = styled(Component)``;

const Container: VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
