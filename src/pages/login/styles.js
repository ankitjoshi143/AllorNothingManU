import styled from "styled-components";


const LoginPageStyles = styled.section`
  margin: 4rem auto 0;
  //max-width: 480px;
  display: flex;
  align-items: center;    
  justify-content: center;
  h2 {
    text-align: center;
    font-size: 2rem;
  }
  .Toastify__toast {
    background-color: #f53131;
      color:white;
}
.Toastify__progress-bar--error {
    background-color: #680101;
}
.Toastify__close-button {
    color:white;
    opacity:1;
}
.Toastify__toast-icon {
    fill:white;
}
`;

const LoginPageRight = styled.div `
    background-color: #FFEDDB;
    height: 25rem;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 0 10px 10px 0;

    Button {
    font-size: 1rem;
    padding: 0.25rem;
    border: 1px solid #694E4E;
  }

  Button:hover {
    background-color: #FAEEE0;
    color: #694E4E;
    border: 1px solid #694E4E;
    cursor: pointer;
  }
`;

const LoginPageLeft = styled.div `
    text-align: center;
    width: 100%;
    background-color: #EDCDBB;
    height: 25rem;
    padding-top: 1rem;
    border-radius: 10px 0 0 10px;
    
    h1 {
        font-size: 3rem;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    p {
        font-family: 'Brush Script MT', cursive;
        font-size: 1.5rem;
        padding-top: 1rem;
    }

    p:last-child {
        text-align: center;
        padding: 0;
        font-size: 3rem;
    }
`;

const LoginPageContainer = styled.div `
    display: flex;
    align-items: center;    
    justify-content: center;
    margin: 0 auto;
    height: auto;

`;

const FormControl = styled.div`
  margin: 1rem 0;
  background-color: #ffeddb;
`;

export {LoginPageStyles, LoginPageContainer, LoginPageRight, LoginPageLeft, FormControl}