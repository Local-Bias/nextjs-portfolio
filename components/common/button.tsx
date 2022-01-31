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

  filter: brightness(1);
  &:hover {
    filter: brightness(0.9);
  }

  border: 0;
  border-radius: 1000px;
  background: linear-gradient(45deg, #00cb8f, #10cb8f);
  color: #fff;
  padding: 16px 64px;
  box-shadow: 0 10px 10px -5px #0001, 0 12px 15px -8px #0001, 0 20px 20px -10px #0001;

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

export const Button = Container;
