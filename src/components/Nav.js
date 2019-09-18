import React from 'react';
import styled from 'styled-components'
import texture from './images/download.jpeg'
const Nav = (props) => {
  return (
    <NavStyles>
      <h1>{props.title}</h1>
    </NavStyles>
  );
};

const NavStyles = styled.div`
text-align: center;
border: 1px solid black; 
background-image: url(${texture})
`;

export default Nav;