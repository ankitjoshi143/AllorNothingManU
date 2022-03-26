import styled from 'styled-components';

const AppBarStyles   = styled.nav`
    box-shadow:  0 0 3px 1px gray;
    padding: 0.5rem 1rem;    
    background-color: #FFEDDB;
    color: #694E4E;
    padding: 1.5rem;
`;

const AppBarItems = styled.ul`
   display:flex;
   justify-content: space-between;
   align-items:center;
   list-style: none;

`;

const AppBarItem = styled.li`
    font-size: 2rem;
    
`

const AppBarItemGroup = styled.li`
    
    span {
        padding: 1rem;
        
    }

`

export {AppBarStyles, AppBarItem, AppBarItems, AppBarItemGroup}

