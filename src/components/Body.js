import React, { useState } from 'react';
import styled from 'styled-components'
import fire from './images/fire.jpeg'
import leaf from './images/leaf.jpeg'
import gran from './images/gran.jpeg'
import peel from './images/peel.jpeg'


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
grid-column-gap: 5px;
grid-row-gap: 5px;
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
    text-align: center;
    
    
  }
    div:nth-child(4n+3) {
    background-image: url(${fire})
  } 
  div:nth-child(4n+2) {
    background-image: url(${leaf})
  }
  div:nth-child(4n+0) {
    background-image: url(${gran})
  }
  div:nth-child(4n+1) {
    background-image: url(${peel})
  }

  @media only screen and (max-width: 773px) {
    

grid-template-rows: repeat(1, minmax(100px, 1fr));
grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: dense;
  }
  @media only screen and (max-width: 600px) {
    

    
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(13, 1fr);
grid-column-gap: 5px;
grid-row-gap: 5px;
.div1 { grid-area: 1 / 1 / 3 / 2; }
.div2 { grid-area: 3 / 1 / 5 / 2; }
.div3 { grid-area: 5 / 1 / 7 / 2; }
.div4 { grid-area: 7 / 1 / 9 / 2; }
.div5 { grid-area: 9 / 1 / 11 / 2; }
.div6 { grid-area: 11 / 1 / 13 / 2; }
.div7 { grid-area: 13 / 1 / 15 / 2; }
.div8 { grid-area: 15 / 1 / 17 / 2; }
.div9 { grid-area: 17 / 1 / 19 / 2; }
.div10 { grid-area: 19 / 1 / 21 / 2; }
.div11 { grid-area: 21 / 1 / 23 / 2; }
.div12 { grid-area: 23 / 1 / 25 / 2; }
.div13 { grid-area: 25 / 1 / 27 / 2; }
      }


`;

export default Body;