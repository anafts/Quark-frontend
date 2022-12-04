import styled from 'styled-components'

const AddOption = styled.button `
    width: 200px;
    min-height: 30px;
    background-color: #342D68;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    border-radius: 16px;
    border: none;
    color: #FFFF;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3vh 0 1vh 0;
    
    :hover {
        cursor: pointer;
        background-color: #8077A0;
    }

    :active {
        background-color: #4F5CA6;
    }
`

export default AddOption;