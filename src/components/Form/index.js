import styled from 'styled-components'

const Form = styled.form `
    width: 90vw;
    min-height: 65vh;
    max-height: max-content;
    background-color: #FFFFFF;
    padding-top: 10vh;
    margin-bottom: 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 24px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

    :last-child :last-child {
        margin-bottom: 2vh;
    }
`

export default Form;
