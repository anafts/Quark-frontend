import styled from 'styled-components'

const AlternativesBox = styled.li `
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 25px;

    label {
        font-family: 'Rubik', sans-serif;
        font-size: 16px;
        font-weight: 400;
        display: flex;
        align-items: center;
    }

    input[type=checkbox] {
        margin-right: 10px;
    }
`

export default AlternativesBox;