import styled from 'styled-components'
import Salvar from '../Buttons/Salvar'

const Cancelar = styled.a `
    width: 206px;
    margin: 0;
    color: #736F8A;
    background-color: transparent;
    border: 1px solid #736F8A;

    min-height: 37px;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    border-radius: 16px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    :hover {
        color: #342D68;
        background-color: #E0DEE7;
        border-color: #342D68;
    }

    :active {
        color: #FFFFFF;
        background-color: #4F5CA6;
        border-color: #4F5CA6;
    }
`

export default Cancelar