import React from 'react';
import styled from 'styled-components'

const Nav = (props) => {
  return (
    <NavStyles>
      <h1>{props.title}</h1>
    </NavStyles>
  );
};

const NavStyles = styled.div`
border: 1px solid black; 
`;

export default Nav;