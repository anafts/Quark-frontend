import { Link } from 'react-router-dom';
import styled from 'styled-components'

const BCLink = styled(Link) `
    display: flex;
    font-size: 16px;
    color: #736F8A;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    text-decoration: none;
    
    
    :hover {
        color: #342D68;
    }

    :active {
        color: #4F5CA6;
    }
    
    ::after {
        content: ">";
        margin: 0 5px;
        cursor: default;
        color: #736F8A;
    }

    :first-child {
        margin-left: 0;
    }

    :last-child {
        color: #342D68;
        font-weight: 700;
        pointer-events: none;
    }

    :last-child::after {
        content: none;
    }
`

export default BCLink;
