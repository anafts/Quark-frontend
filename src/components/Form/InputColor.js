import styled from 'styled-components'

const InputColor = styled.input `
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    width: 207px;
    height: 40px;
    padding: 0 10px;
    border-radius: 16px;
    border: 2px solid #8077A0;
    color: #8077A0;

    :focus {
        border-color: #342D68;
        outline: none;
        color: #342D68;
    }


    :last-child {
        border: none;
        appearance: none;
        width: 104px;
        padding: 0;
        background-color: transparent;
    }

    :last-child::-webkit-color-swatch {
        height: 40px;
        border-radius: 16px;
        border: 2px solid;
        box-shadow: inset  0 0 0 3px white;
        cursor: pointer;
        position: relative;
        left: 9px;
        bottom: 4px;
    }

    :last-child::-webkit-color-swatch:hover {
        border: 2px solid #342D68;
    }

    :last-child::-webkit-color-swatch:active {
        border: 2px solid #4F5CA6;
    }

    :last-child::-moz-color-swatch {
        height: 40px;
        border-radius: 16px;
        border: 2px solid;
        cursor: pointer;
    }

    :last-child::-moz-color-swatch:hover {
        border: 2px solid #342D68;
    }

    :last-child::-moz-color-swatch:active {
        border: 2px solid #4F5CA6;
    }
`

export default InputColor;
