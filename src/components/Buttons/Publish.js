import styled from 'styled-components';

const PublishBtn = styled.a `
    width: 121px;
    height: 37px;
    background-color: #342D68;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #FFFF;
    text-decoration: none;
    border: none;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10vw;
    
    :hover{
        cursor: pointer;
        background-color: #8077A0;
    }

    :active {
        background-color: #4F5CA6;
    }
`

export default PublishBtn;