import styled from 'styled-components'

const BoxText = styled.section `
    width: calc(35vw - 60px);
    height: max-content;
    margin-bottom: 5vh;
    padding: 20px 30px;
    background-color: #FFF;
    border: none;
    border-radius: 16px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    outline: none;

    p:first-child {
        margin-top: 0;
    }
`

export default BoxText;