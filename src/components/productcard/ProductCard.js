import { ProductCardStyles, ProductDescription, ProductImage, ProductName, ProductPrice } from "./styles";
import React from "react";

import placeholderImage from "./../../assets/images/future-car.jpg"


function ProductCard({ children, ...props }) {
  
  return (
    <ProductCardStyles {...props}>
      <ProductImage>
        <img src={placeholderImage} alt="future car image"/>
      </ProductImage>
      <ProductName>Mercedes Benz</ProductName>
      <ProductPrice>$257,999.99</ProductPrice>
      <ProductDescription>Manchester United’s 9-0 victory against Ipswich Town at Old Trafford on 4th March 1995 remains the biggest ever Premier League victory. </ProductDescription>
    </ProductCardStyles>
  );
}

export default ProductCard;
