import React, {useState} from 'react'
 
import {Link} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from 'libs/firebase'

import { IoSadOutline } from "react-icons/io5";
import {PageNotFoundBody, PageNotFoundTitle, PageNotFoundBox} from "./styles"

function PageNotFound  (props){
    const [isUser, setIsUser] = useState(false)
    
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setIsUser(true)
        }else{
            setIsUser(false)
        }
    })

    return (
        <>
        <PageNotFoundBody>
           
            <PageNotFoundBox>
                    <h1>Man U Need Rentals</h1>
                
                <PageNotFoundTitle>
                    404 error: Page Not Found ! <IoSadOutline/>
                </PageNotFoundTitle>

                {
                    isUser? <Link to="/dashboard">Take me back to safety</Link> : <Link to="/">Take me back to safety</Link>
                }              
            </PageNotFoundBox>
            
        </PageNotFoundBody>
        </>
    );
}

export default PageNotFound 