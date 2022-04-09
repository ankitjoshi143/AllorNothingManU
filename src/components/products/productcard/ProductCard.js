import { ProductCardStyles, ProductDescription, ProductImage, ProductName, ProductPrice } from "./styles";
import React from "react";

// import placeholderImage from "./../../assets/images/future-car.jpg"


function ProductCard({ children, product, ...props }) {
  const {productName, productPrice, imageURL, productDescription} = {...product}

  return (
    <ProductCardStyles {...props}>
      <ProductImage>
        <img src={imageURL} alt="future car"/>
      </ProductImage>
      <ProductName>{productName}</ProductName>
      <ProductPrice>{productPrice}</ProductPrice>
      <ProductDescription>{productDescription} </ProductDescription>
    </ProductCardStyles>
  );
}

export default ProductCard;
