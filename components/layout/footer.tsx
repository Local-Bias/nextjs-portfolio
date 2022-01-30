import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { TwitterIcon } from '../common/icon/twitter';
import { GithubIcon } from '../common/icon/github';
import { ZennIcon } from '../common/icon/zenn';
import { SOCIAL } from '../../contents/social';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <footer {...{ className }}>
    <div>Copyright © 2022 Ribbit All Rights Reserved.</div>
    <div className='social-icons'>
      <a target='_blank' rel='nofollow noopener noreferrer' href={SOCIAL.twitter}>
        <TwitterIcon />
      </a>
      <a target='_blank' rel='nofollow noopener noreferrer' href={SOCIAL.github}>
        <GithubIcon />
      </a>
      <a target='_blank' rel='nofollow noopener noreferrer' href={SOCIAL.zenn}>
        <ZennIcon />
      </a>
    </div>
  </footer>
);

const StyledComponent = styled(Component)`
  grid-area: footer;
  margin-top: 10vh;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;

  backdrop-filter: blur(8px);
  box-shadow: 0 2px 3px -1px #0002, 0 3px 5px 1px #0002;
  border: 1px solid #fff2;
  background: linear-gradient(135deg, #fff3 60%, #ddd3);
  color: #fffc;

  .social-icons {
    display: flex;
    gap: 16px;

    svg {
      fill: #fffc;
      width: 32px;
      height: 32px;
    }
  }
`;

const Container: VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
