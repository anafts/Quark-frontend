import styled from 'styled-components';

const BackBtn = styled.a `
    min-width: 40px;
    min-height: 40px;
    margin-right: 82px;
    background-color: transparent;
    border: none;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    :hover{
        cursor: pointer;
        background-color: #E0DEE7;
    }

    :hover .tooltip {
        visibility: visible;
        opacity: 1;
        transition-delay: 0.5s;
        transition-duration: 0.5s;
    }
`

export default BackBtn;