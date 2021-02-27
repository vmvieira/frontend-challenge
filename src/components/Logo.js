import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FcReddit } from 'react-icons/fc';

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0.5;

  & span {
    font-size: 24px;
    font-weight: 600;
    margin-left: 5px;
  }
`;

function Logo() {
  return (
    <LogoWrap>
      <IconContext.Provider value={{ size: '2em' }}>
        <FcReddit />
      </IconContext.Provider>
      <span>reddit</span>
    </LogoWrap>
  );
}

export default Logo;
