import React, {useState} from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import {useAddNewProduct} from 'hooks/useAddNewProduct';
import {AddProductStyles} from './styles'
import {ProductEditor} from "components/products/ProductEditor";
import { EditorFeedBack } from "components/products/EditorFeedBack";
import ProductPreview from 'assets/images/future-car.jpg'

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState('Classic Car')
  const [productPrice, setProductPrice] = useState('57,000.99')
  const [productDescription, setProductDescription] = useState('Manchester United’s 9-0 victory against Ipswich Town at Old Trafford on 4th March 1995 remains the biggest ever Premier League victory.')
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [loading, productLoader] = useAddNewProduct();
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

  function handleSubmit (e){
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDescription
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)
  }

  if(isWriting){
    return <EditorFeedBack status={loading} writeCompleted={setIsWriting}/>
  } else{
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

        handleSubmit={handleSubmit}
        />
      </AddProductStyles>
      )
  }
  

  
}

export default AddProduct