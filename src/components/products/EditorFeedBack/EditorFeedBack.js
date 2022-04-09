import React from "react";

import { IoIosCheckmarkCircleOutline, IoIosCloudUpload } from "react-icons/io";

import { Button } from "ui/buttons";

import { useNavigate } from "react-router-dom";

import { EditorFeedBackStyles,  FeedBackMessage, FeedBack, FeedBackOption } from "./styles";

function EditorFeedBack({ children, status, writeCompleted, ...props }) {
  
  const navigator = useNavigate();
  return (
    <EditorFeedBackStyles {...props}>
      {
        !status
        ?
        <FeedBack>
          <IoIosCheckmarkCircleOutline color="65C18C" size="12rem"/>
          <FeedBackMessage>
            Product Uploaded Successfully!
          </FeedBackMessage>
        </FeedBack>
        :
        <FeedBack>
          <IoIosCloudUpload color="65C18C" size="12rem"/>
          <FeedBackMessage>
            Uploading New Product...
          </FeedBackMessage>
        </FeedBack>
      }
      
      <FeedBackOption>
      <Button 
              bc="tomato" 
              color="white" 
              onClick={()=> writeCompleted(false)}
              disabled={status}
              >Add Another Product</Button>
              <Button 
              bc="cornflowerblue" 
              color="white"
              onClick={()=> navigator('/dashboard')}
              >View All Products</Button>
      </FeedBackOption>
    </EditorFeedBackStyles>
  );
}

export default EditorFeedBack;