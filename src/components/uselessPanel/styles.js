import styled from "styled-components";

const PanelStyles = styled.div `
    width: 70%;
    color: RED;
    padding: 0 1rem;
`;

const PanelTitle = styled.h1 `
    font-size: 2.25rem;
    
`;

const PanelButton  = styled.button`
  border:none;
  background-color: transparent;
  font-size: 1.5rem;
`;

const Button = styled.button`
    background-color: ${props => props.bgcolor || "grey"};
    border:none;
    border-radius: 3px;
    box-shadow: 0 0 2px 1px #Dfdfdf;
    padding: 0.5rem 2rem;
    margin: 0;
    color: ${props => props.color || "white"};
`;


const PanelBarItems = styled.ul`
    display:flex;
    justify-content: space-between;
`;

const PanelBarItem = styled.li`
    margin: 0.5rem;
`;

const PanelBody = styled.div`
    padding: 1rem;
`;


export { PanelStyles, PanelButton, PanelTitle, PanelBarItems, PanelBarItem, PanelBody, Button };