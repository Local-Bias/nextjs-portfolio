import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { Glass } from '../../common/glass';
import { GlassButton } from '../../common/glass-button';
import Link from 'next/link';
import { SKILLS } from '../../../contents/skills';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <div className='contents'>
      <div className='title'>
        <div>
          <div>
            <h2>Skills and Tools</h2>
          </div>
          <Link href='/skill/'>
            <GlassButton>Details</GlassButton>
          </Link>
        </div>
      </div>
      <div className='items'>
        {SKILLS.map((skill, i) => (
          <Glass key={i}>{skill.name}</Glass>
        ))}
      </div>
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  min-height: 100vh;

  .contents {
    display: flex;
    flex-direction: row-reverse;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
    width: 95vw;
    margin: auto;
    gap: 32px;

    > div {
      width: 100%;
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
    fill: #fffc;
    width: 100px;
  }

  h2 {
    font-size: 3em;
    color: #fffc;
    flex: 1 1 auto;
    width: 100%;
    text-align: center;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10vh;

  .items {
    padding: 5vh 0;
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    gap: 32px;
    width: 100%;

    > div {
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.3em;
    }
  }
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
