import React  from "react";

import { useGetProducts } from "hooks/useGetProducts";
import {PanelStyles, PanelTitle, PanelBody} from './styles'
import { ProductCard } from "components/products/productcard"

function AllProductsPanel ({title, ...props}) {
    
    const productData = useGetProducts()
    
        return (
            <PanelStyles>
                <PanelTitle>
                    <h2>{title || "Display Panel" }</h2>
                </PanelTitle>
                <PanelBody>
                {productData?  productData.map(product=><ProductCard key={product.uid} product={product}/>) :  null}
                </PanelBody>
            </PanelStyles>
        )
    

}

export default AllProductsPanel;