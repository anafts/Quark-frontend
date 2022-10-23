import styled from 'styled-components'

const DescriptionText = styled.textarea `
    margin: 0 0 2vh 0;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    width: 350px;
    height: 260px;
    padding: 10px;
    border-radius: 16px;
    border: 2px solid #8077A0;
    color: #8077A0;
    resize: none;

    :focus {
        border-color: #342D68;
        outline: none;
        color: #342D68;
    }

    ::-webkit-scrollbar {
        width: 32px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 16px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #8077A0;
        border-radius: 16px;
        border: 7px solid #FFFFFF;
        
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #342D68;
    }

    ::-webkit-scrollbar-thumb:active {
        background: #4F5CA6; 
    }
`

export default DescriptionText;