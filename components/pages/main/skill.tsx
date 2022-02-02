import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { Button } from '../../common/button';
import Link from 'next/link';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Console: VFCX = ({ className }) => (
  <div {...{ className }}>
    <div className='header'>
      <p>C:\WINDOWS\system32\cmd.exe</p>
    </div>
    <div className='content'>
      <div>Microsoft Windows [Version xx.x.xxxxx.xxx]</div>
      <div>(c) 2022 Ribbit All rights reserved.</div>
      <div>&nbsp;</div>
      <div>function main(arg) {'{}'}</div>
      <div>const main = (arg: string): void {' => {}'}</div>
      <div>Private Sub(ByRef arg as String)</div>
      <div>fn main(arg: char) {}</div>
      <div>&nbsp;</div>
      <div>
        C:\users\user&gt;
        <span className='highlight'>type nul &gt; %userprofile%\Documents\empty.file</span>
        <span className='highlight console-piriod'>_</span>
      </div>
      <div className='padding'></div>
    </div>
  </div>
);

const StyledConsole = styled(Console)`
  width: 100%;
  box-shadow: 0 5px 10px -2px #0003, 0 10px 20px -3px #0003, 0 10px 30px -5px #0003;
  border: 1px solid #0006;
  padding: 0 !important;
  border-radius: 8px;
  overflow: hidden;

  p {
    padding: 0;
    margin: 0;
  }
  .header {
    background-color: #fff;
    width: 100%;
    padding: 8px 15px;
    font-size: 10pt;
    position: relative;
  }
  .header:before {
    content: '―　　□　　×';
    font-size: 10pt;
    font-weight: 600;
    position: absolute;
    top: 0;
    right: 12px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .highlight {
    color: #5d5;
  }

  .content {
    width: 100%;
    height: 50vh;
    background-color: black;
    overflow-y: scroll;
    color: #bbb;
    margin: 0;
    padding: 1em;
  }
  .padding {
    height: 1000px;
  }
  .console-piriod {
    animation-name: console-piriod;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: forwards;
    transition: all 0.4s ease-out;
  }
  @keyframes console-piriod {
    0% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <div className='contents'>
      <div className='title'>
        <div>
          <div>
            <h2>Skills and Tools</h2>
          </div>
          <Link href='/skill/'>
            <Button>Details</Button>
          </Link>
        </div>
      </div>
      <div>
        <StyledConsole />
      </div>
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  padding-left: 100px;
  @media (max-width: 1000px) {
    padding: 0;
  }
  min-height: 100vh;
  background-color: #f2f6ff;
  color: #012d;

  .contents {
    display: flex;
    flex-direction: row-reverse;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
    width: 90vw;
    margin: auto;
    gap: 32px;

    > div {
      width: 100%;
      &:nth-of-type(2) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .title {
    > div {
      height: 100vh;
      @media (max-width: 1000px) {
        height: auto;
      }
      position: sticky;
      top: 0;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10vh;
    }
  }

  svg {
    width: 100px;
  }

  h2 {
    font-size: 60px;
    flex: 1 1 auto;
    width: 100%;
    text-align: center;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10vh;
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
