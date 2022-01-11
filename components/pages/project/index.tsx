import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';

import BackgroundImage from './background-image';
import Introduction from './introduction';
import Skill from './skill';
import Project from './project';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <BackgroundImage />
    <Introduction />
    <Skill />
    <Project />
  </div>
);

const StyledComponent = styled(Component)``;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
