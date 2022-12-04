import styled from 'styled-components'

const SkillColor = styled.div `
    content: '';
    width: 0;
    height: 0;
    border: 22px solid;
    border-color: ${props => props.cor};
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-top-left-radius: 18px;
    position: absolute;
    box-sizing: content-box;
    transform: translate(-12px, -29px);
`

export default SkillColor;