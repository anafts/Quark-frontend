import styled from 'styled-components';

const Datas = styled.section `
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin: 10px 0 30px 0;
    display: flex;
    justify-content: center;

    h1:first-child {
        padding-right: 20px;
    }

    h1:first-child::after {
        content: '|';
        padding-left: 20px;
    }
`

export default Datas;
