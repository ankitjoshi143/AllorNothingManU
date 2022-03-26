import React, {useState} from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import {AddProductStyles} from './styles'
import {ProductEditor} from "components/products/ProductEditor";
import ProductPreview from 'assets/images/future-car.jpg'

function AddProduct ({children, ...props})  {
  const [productName, setProductName] = useState('Classic Car')
  const [productPrice, setProductPrice] = useState('57,000.99')
  const [productDescription, setProductDescription] = useState('Manchester United’s 9-0 victory against Ipswich Town at Old Trafford on 4th March 1995 remains the biggest ever Premier League victory.')
  const [productImage, setProductImage] = useState(ProductPreview)
  const formatter = useNumberFormat()

  function handleProductName (name){
    setProductName(name)
  }

  function handleProductPrice (price){
    setProductPrice(formatter(price))
  }
  
  function handleProductDescription (description){
    setProductDescription(description)
  }

  return (
        <AddProductStyles  {...props}>
          <ProductEditor 
          productName={productName} 
          productPrice={productPrice} 
          productDescription={productDescription}
          productImage={productImage}

          handleProductName={handleProductName}
          handleProductPrice={handleProductPrice}
          handleProductDescription={handleProductDescription}
          setProductImage={setProductImage}
          />
        </AddProductStyles>
  )
}

export default AddProduct