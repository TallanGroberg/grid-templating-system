import React, { useState } from 'react';
import styled from 'styled-components'


const Body = () => {
  const [divId, setDivId] = useState([])

  const showState = (argument) => {
    while (argument > 0 ) {
      divId.push(`div${argument--}`)
    }
    return divId.reverse()
  }
  showState(13)
  return (
    <DivStyles>
      {divId.map( id => {
        return <div class={id}> {id} </div>
      })}
    </DivStyles>
  );
};
const DivStyles = styled.div`
  display: grid;
grid-template-columns: repeat(7, minmax(100px,  1fr) );
grid-template-rows: repeat(7, minmax(100px, 1fr));
grid-column-gap: 2px;
grid-row-gap: 2px;
    grid-auto-rows: 75px;
    grid-auto-flow: dense;

.div1 { grid-area: 4 / 4 / 5 / 5; }
.div2 { grid-area: 3 / 3 / 4 / 5; }
.div3 { grid-area: 3 / 5 / 5 / 6; }
.div4 { grid-area: 5 / 4 / 6 / 6; }
.div5 { grid-area: 4 / 3 / 6 / 4; }
.div6 { grid-area: 3 / 2 / 7 / 3; }
.div7 { grid-area: 2 / 2 / 3 / 6; }
.div8 { grid-area: 2 / 6 / 6 / 7; }
.div9 { grid-area: 6 / 3 / 7 / 7; }
.div10 { grid-area: 2 / 1 / 8 / 2; }
.div11 { grid-area: 1 / 1 / 2 / 7; }
.div12 { grid-area: 1 / 7 / 7 / 8; }
.div13 { grid-area: 7 / 2 / 8 / 8; }
  
  div {
    border: 1px solid black;
    
  }
    div:nth-child(2n+1) {
    background-color: #FFFFFF;
  } 
`;

export default Body;