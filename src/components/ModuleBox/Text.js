import styled from 'styled-components'

const Text = styled.p `
    font-family: 'Rubik', sans-serif;
    line-height: 25px;
    color: #000000;
    text-align: justify;
    margin-top: 20px;
    padding: 0;

    ::first-letter {
        padding-left: 25px;
    }

    strong {
        font-weight: 700;
    }
`

export default Text;