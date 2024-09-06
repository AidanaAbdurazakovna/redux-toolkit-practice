import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantyti, incrementQuantyti } from "../store/slice";

export const Product = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch()
  console.log('products: ', products);


  const incrementHandler = (productId) => {
    dispatch(incrementQuantyti(productId));
  };
  const decrementHandler = (productId) => {
    dispatch(decrementQuantyti(productId));
  };

  return (
    <div>
      
      {products.map((product) => (
        <StyledItem key={product.id}>
          <h3> {product.id}</h3>
          <h3>{product.name}</h3>
          <h3>{product.available}</h3>
          <h3>{product.price}</h3>
          <h3>{product.Quantyti}</h3>
          <h3>
            {Math.round(product.TotalAmount)} $
          </h3>
          <div>
            <button onClick={() => decrementHandler(product.id)}>-</button>
            <button onClick={() => incrementHandler(product.id)}>+</button>
          </div>
         
        </StyledItem>
        
      ))}
    
      
    </div>
  );
};

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
`;
