import React from "react";
import { PanelStyles, PanelButton, PanelTitle, PanelBarItems, PanelBarItem, PanelBody, Button } from "./styles";

function Panels (props) {
    return (
        <PanelStyles>
            <PanelBarItems>
                <PanelBarItem><PanelButton>Home</PanelButton> &gt; <PanelButton>Product</PanelButton></PanelBarItem>
                <PanelBarItem><Button  >Add Product</Button></PanelBarItem>
            </PanelBarItems>
            <PanelBody>
                <PanelTitle>Product Listings</PanelTitle>

                
            </PanelBody>
            
            
        </PanelStyles>
      );
}

export default Panels;





