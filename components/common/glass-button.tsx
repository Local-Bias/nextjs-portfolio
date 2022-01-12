import React, { FCX } from 'react';
import styled from '@emotion/styled';

type ContainerProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  Readonly<{ depth?: number; elevation?: number }>;
type Props = Readonly<{ depth: number; elevation: number }>;

const Component: FCX<Props> = ({ className, children, ...others }) => (
  <button {...{ className, ...others }}>{children}</button>
);

const StyledComponent = styled(Component)`
  backdrop-filter: blur(8px);
  transition: all 250ms ease;
  cursor: pointer;

  box-shadow: inset 2px 2px 3px -1px #fff5, inset -2px -2px 3px -1px #0003, 0 2px 3px -1px #0002,
    0 3px 5px 1px #0002;
  border-radius: 1000px;
  background-color: transparent;
  background-image: linear-gradient(62deg, #8ec5fcbb 0%, #e0c3fcbb 100%);

  filter: hue-rotate(0);
  &:hover {
    filter: hue-rotate(90deg);
  }

  color: #fffd;
  padding: 16px 64px;
  border: 0;

  &[disabled] {
    cursor: not-allowed;
    box-shadow: inset -2px -2px 3px -1px #0003, 0 2px 3px -1px #0002, 0 3px 5px 1px #0002;
    background-image: linear-gradient(62deg, #5557 0%, #5559 100%);
    color: #fffc;
  }
`;

const Container: FCX<ContainerProps> = ({ depth = 3, elevation = 1, ...others }) => {
  return <StyledComponent {...{ depth, elevation, ...others }} />;
};

export const GlassButton = Container;
