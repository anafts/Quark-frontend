import styled from 'styled-components'

const CardInterno = styled.div `
    width: 250px;
    height: 115px;
    background-color: #FFFFFF;
    border: 2px solid #8077A0;
    border-radius: 20px;
    transition: 0.2s;
    padding: 5px 10px 10px 10px;
    grid-area: auto;

    :hover {
        transform: scale(1.05);
        border-color: #35295E;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
    }

    :hover a.editar {
        visibility: visible;
        opacity: 1;
    }

`

export default CardInterno;
