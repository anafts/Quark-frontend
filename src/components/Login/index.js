import styled from 'styled-components'

const FormLogin = styled.form `
    width: 520px;
    height: 560px;
    transform: translateX(-50%);
    margin-top: 10vw;
    margin-left: 50vw;
    background-color: #FFFFFF;
    border-radius: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0.2vh 0.5vw rgba(0, 0, 0, 0.2);

    input {
        margin: 0 0 25px 0;
    }

    button {
        margin-top: 25px;
    }
`

export default FormLogin;