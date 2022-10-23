import styled from 'styled-components'

const TooltipAdd = styled.span `
    width: max-content;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    padding: 7px 10px;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    transform: translateY(-145%);
    background-color: #666666;
    display: flex;
    visibility: hidden;
    opacity: 0;
    
    ::after {
        content: '';
        border: 10px solid;
        border-color: #666666;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-top-left-radius: 3px;
        position: absolute;
        right: 0;
        transform: translate(-15px, 11px) rotate(-135deg);
    }

`

export default TooltipAdd;