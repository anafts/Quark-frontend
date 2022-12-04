import styled from 'styled-components';

const AddContentBtn = styled.button `
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 16px;
    padding: 5px;
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

    :hover .tooltip {
        visibility: visible;
        opacity: 1;
        transition-delay: 0.5s;
        transition-duration: 0.5s;
    }

`

export default AddContentBtn;
