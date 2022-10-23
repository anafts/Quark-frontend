import styled from 'styled-components'

const TooltipBack = styled.span `
    width: max-content;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    padding: 7px 10px;
    border-radius: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(5vw, 80%);
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
        left: 0;
        transform: translate(10px, -14px) rotate(45deg);
    }

`

export default TooltipBack;