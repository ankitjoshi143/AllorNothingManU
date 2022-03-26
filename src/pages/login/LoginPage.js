import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {MdError} from 'react-icons/md';
import {IoCarSportOutline} from "react-icons/io5";
import { signInWithEmailAndPassword } from "firebase/auth";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {auth} from "./../../libs/firebase"
import { Label, Input } from "./../../ui/forms";
import { SubmitButton } from "../../ui/buttons";
import {LoginPageStyles, LoginPageContainer, LoginPageLeft, LoginPageRight, FormControl} from './styles'

//import {Form, Button, Container, Row, Col} from "react-bootstrap";
//import logo from '../../../src/logo.png';
 

function LoginPage(props) {
     const navigator = useNavigate()
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")


     const notify = (error) => toast.error(error.code,{
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon:<MdError/>

  });


   function onLoginRequest(e){
     e.preventDefault();
     signInWithEmailAndPassword(auth, email, password)
     .then(userCredential=>{
         navigator('/dashboard') 
     })
     .catch(error=>{
       // add toast messages
       notify(error)
     })
  
   }
  return (
    <>
      <LoginPageStyles>
        <ToastContainer/>
        <LoginPageContainer>
          <LoginPageLeft>
            <header>
              <h2>StoreFront Dashboard</h2>
              <p><IoCarSportOutline size="15rem"/></p>
              </header>
          </LoginPageLeft>

          <LoginPageRight>
            <form onSubmit={onLoginRequest}>
              <FormControl className="form-control">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="text" placeholder="janedoe@gmail.com" onChange={(e)=> setEmail(e.target.value)}/>
              </FormControl>

              <FormControl className="form-control">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="text" placeholder="account password" onChange={(e)=>setPassword(e.target.value)} />
              </FormControl>
              <SubmitButton
                  type="submit"
                  padding="0.88rem"
                  margin="1rem 0 0"
                  fs="1rem"
                  bg="orange"
                  width="100%"
                >
                  log in to dashboard
                </SubmitButton>
            </form>
          </LoginPageRight>
        </LoginPageContainer>
      </LoginPageStyles>
    </>
  );
}

export default LoginPage;
