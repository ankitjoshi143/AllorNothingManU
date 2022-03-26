import styled from 'styled-components';

const PanelStyles = styled.section `
    flex: 1; // Take up all the aviable space
    box-shadow: 0 0 2px 1px #694E4E;
    background-color: #eed7a1;
    color: #694E4E;
    margin: 1.5rem;
    border-radius: 5px;


`;

const PanelTitle = styled.header `
    h2 {
        font-weight: bold;
        font-size: 40px;
        padding:0.5rem;
        border-radius: 3px;
        color: #694E4E;
    }
    padding: 1rem 2rem;
`;

const PanelBody = styled.div `
    display: flex;
    margin: ${props => props.margin || " 3rem"};

`;

export {PanelStyles, PanelTitle, PanelBody}