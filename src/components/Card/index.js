import styled from 'styled-components'

const Card = styled.div `
    width: 250px;
    height: 130px;
    margin: 0;
    background-color: #FFFFFF;
    border: 2px solid #8077A0;
    border-radius: 20px;
    transition: 0.2s;
    padding: 27px 10px 17px 10px;
    grid-area: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    :hover {
        transform: scale(1.05);
        border-color: #35295E;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
    }

    :hover a.editar {
        visibility: visible;
        opacity: 1;
    }

    :hover div.cor {
        transform: translate(-13px, -30px);
    }

`

export default Card;
