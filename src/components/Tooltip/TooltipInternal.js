import styled from 'styled-components'

const TooltipInternal = styled.span `
    
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    padding: 3px 10px;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    transform: translateY(-25px);
    background-color: #666666;
    display: flex;
    visibility: hidden;
    opacity: 0;
    
    ::after {
        content: '';
        border: 10px solid;
        border-color: #666666;
        position: absolute;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-top-left-radius: 3px;
        transform: translate(19px, 15px) rotate(-135deg);
    }

`

export default TooltipInternal;