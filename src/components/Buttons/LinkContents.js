import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkContents = styled(Link)`
    width: max-content;
    position: absolute;
    right: 0vw;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    border-radius: 16px;
    border: none;
    font-size: 16px;
    color: #FFFF;
    text-decoration: none;
    padding: 10px 15px;
    margin-top: 10px;
    background-color: #8077A0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    :hover{
        cursor: pointer;
        background-color: #342D68;
    }

    :active {
        background-color: #4F5CA6;
    }

    :last-child {
        top: 96px;
    }
`

export default LinkContents;