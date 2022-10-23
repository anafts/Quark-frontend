import styled from 'styled-components'

const GridSkills = styled.section `
    width: max-content;
    height: max-content;
    margin: 0;
    margin-top: 4vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    padding-bottom: 5vh;

    @media screen and (max-width: 1450px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 770px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export default GridSkills;
