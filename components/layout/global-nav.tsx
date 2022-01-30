import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { currentPageState } from '../../states/current-page';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{ currentPage: string }>;

const links = [
  { href: '/', label: 'Home' },
  { href: '/skill', label: 'Skill' },
  { href: '/project', label: 'Project' },
  { href: '/career', label: 'Career' },
];

const Component: VFCX<Props> = ({ className, currentPage }) => (
  <div {...{ className }}>
    <div className='nav-items'>
      {links.map((link, i) => (
        <Link href={link.href} key={i}>
          <div className={currentPage === link.label ? 'current' : ''}>{link.label}</div>
        </Link>
      ))}
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  position: fixed;
  z-index: 100;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: center;

  > div {
    top: 0;
    height: 90vh;
    width: 60px;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    background-color: #fff5;
    backdrop-filter: blur(8px);
    border-radius: 1000px;
    writing-mode: vertical-rl;
    padding: 5px;
  }

  .nav-items > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    color: #000a;
    cursor: pointer;

    font-weight: 700;
    &.current {
      background-color: #fffa;
    }
  }
`;

const Container: VFC<ContainerProps> = () => {
  const currentPage = useRecoilValue(currentPageState);

  return <StyledComponent {...{ currentPage }} />;
};

export default Container;
