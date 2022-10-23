import styled from 'styled-components'

const LabelInputArquivo = styled.label `
    width: 60px;
    height: 44px;
    background-color: #342D68;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover {
        background-color: #4F5CA6;
    }

    :active {
        background-color: #0086CA;
    }

    img {
        height: 30px;
        transform: translateY(1vh);
    }

`

export default LabelInputArquivo;
