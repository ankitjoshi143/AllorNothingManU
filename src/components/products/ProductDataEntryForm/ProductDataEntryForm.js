import React from 'react';

import {ProductDataEntryFormStyles, ProductDescription, ProductImage, ProductName, ProductPrice} from './styles';
import {Label, Input} from 'ui/forms';
import { TextArea } from 'ui/forms/textarea';
import {ProductImageDropBox} from '../ProductImageDropBox';
import {SubmitButton} from 'ui/buttons'


function ProductDataEntryForm ({children, handleProductName, handleProductPrice, handleProductDescription, handleSubmit, setProductImage, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}>
          <ProductImage>
            <Label>Product Image</Label>
            <ProductImageDropBox setProductImage={setProductImage}/>
          </ProductImage>
        <fieldset>
            <ProductName>
            <Label>Product Name</Label>
              <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30}/>
            </ProductName>

            <ProductPrice>
            <Label>Product Price</Label>
            <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
            </ProductPrice>
          </fieldset>
          <ProductDescription>
          <Label>Product Description</Label>
            <TextArea onChange={(e)=>handleProductDescription(e.target.value.trim())} maxLength={300}/>
          </ProductDescription>

          <div>
            <SubmitButton type="submit"> Add Products </SubmitButton>
          </div>

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm