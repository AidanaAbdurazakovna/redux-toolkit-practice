import React from 'react'
import styled from 'styled-components';

export const Header = () => {
  return (
    <div>
 <StyledDiv>
        <h1 >Electro World</h1 >
    </StyledDiv>

    <StyledText>
        <h2>Product ID </h2>
        <h2>Product Name </h2>
        <h2># Avialah2le </h2>
        <h2>Price </h2>
        <h2>Quantity </h2>
        <h2>Total </h2>
    </StyledText>
    </div>
   
  )
}
const StyledDiv = styled.div`
  width: 100%;
  height: 10vh;

  text-align: center;
  background-color: green;
  color: white;
`;
const StyledText=styled.div`
      display: flex;
  align-items: center;
justify-content: space-evenly;

`