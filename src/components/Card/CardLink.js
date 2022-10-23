import styled from 'styled-components'

const CardLink = styled.a `
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    text-decoration: none;
    color: #35295E;

    :hover {
        color: #4F5CA6;
    }

    :active {
        color: #0086CA;
    }

    :hover .tooltipTitulo {
        visibility: visible;
        opacity: 1;
        transition-delay: 0.5s;
        transition-duration: 0.5s;
    }

`

export default CardLink;