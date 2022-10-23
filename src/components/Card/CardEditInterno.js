import styled from 'styled-components'

const CardEditInterno = styled.a `
    max-width: 35px;
    max-height: 35px;
    border-radius: 100%;
    background-color: #4F5CA6;
    position: absolute;
    transform: translate(633%, -105%);
    justify-content: center;
    cursor: pointer;
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s ease-in-out;

    :hover {
        background-color: #C54F70;
    }

    :active {
        transition: 0s;
        background-color: #E83A69;
    }

    :hover .tooltip {
        visibility: visible;
        opacity: 1;
        transition-delay: 0.5s;
        transition-duration: 0.5s;
    }

`

export default CardEditInterno;