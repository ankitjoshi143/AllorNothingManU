import styled from 'styled-components';


const AppBarStyles = styled.nav`
    box-shadow: 0 0 2px 1px grey;
    padding: 1rem;
    height: 64px;
    background-color: ${props => props.bgcolor || "transparent"};;
`;

const AppBarItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const AppBarItem = styled.ul`


`

const AppBarItemGroup = styled.ul`


`


export {AppBarStyles, AppBarItem, AppBarItemGroup, AppBarItems}
