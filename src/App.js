import React from 'react';
import Nav from './components/Nav'
import Body from './components/Body'
import styled from 'styled-components'
function App() {
  return (
    <>
        <Nav title="header" />
      <AppContainer>
        <Body />
      </AppContainer>
        <Nav title="footer" />
    </>
  );
}

const AppContainer = styled.div`
background: linear-gradient(to bottom right, aliceblue, black);
`;
export default App;
