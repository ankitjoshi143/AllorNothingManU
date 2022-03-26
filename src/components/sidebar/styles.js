import styled from "styled-components";

const SideBarTitle = styled.h1 `
    font-size: 1.75rem;
    
`;

const SideBarStyles = styled.div `
    width: 30%;
    color: RED;
    padding: 1rem;
    border-right: 2px solid;
    box-shadow:  1px 3px 2px 0 RED;
`;

const SideBarButton  = styled.button`
  border:none;
  background-color: transparent;
  font-size: 1.5rem;
`;

const SideBarItems = styled.ul`
    align-items:center;
    margin: 2rem 0;
`;

const SideBarItem = styled.li`
    margin: 0.5rem;
`;


export { SideBarStyles, SideBarTitle, SideBarButton, SideBarItems, SideBarItem };