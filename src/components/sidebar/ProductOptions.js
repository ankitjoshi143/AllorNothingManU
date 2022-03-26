import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductOptionStyles = styled.ul`
   margin: 1rem 0;
   a{
       font-size:2rem;
       color: black;
       text-decoration: none;
   }
`;

function ProductOptions  (props){
    return( 
        <>
      
        <ProductOptionStyles>
            <li>
                <Link to="/dashboard">View All Products</Link>
            </li>
            <li>
              <Link to="add">Add New Products</Link>
            </li>
            <li>
              <Link to="edit">Edit Products</Link>
            </li>
        </ProductOptionStyles>
        </>
    )
}

export default ProductOptions 