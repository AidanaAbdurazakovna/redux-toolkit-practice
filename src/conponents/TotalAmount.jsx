import React from "react";
import { products } from "../constants/general";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const TotalAmount = () => {
  const { products } = useSelector((state) => state.product);

  const totalAmount = products.reduce((acc, item) => {
    console.log();

    return acc + item.price * item.Quantyti;
  }, 0);

  return (
    
      
      <StyledDiv>
      <h2>Order summary</h2>
        <h3> Total :$ {Math.round(totalAmount)} </h3>
      </StyledDiv>
    
  );
};



const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
