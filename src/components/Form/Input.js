import styled from 'styled-components'

const InputTitulo = styled.input `
    margin: 0 0 2vh 0;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    width: 320px;
    min-height: 40px;
    padding: 0 10px;
    border-radius: 16px;
    border: 2px solid #8077A0;
    color: #8077A0;

    :focus {
        border-color: #342D68;
        outline: none;
        color: #342D68;
    }

`

export default InputTitulo;
