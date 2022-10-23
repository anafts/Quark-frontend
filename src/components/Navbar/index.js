import styled from 'styled-components'

const Navbar = styled.section `
    background-color: #fff;
    width: 100%;
    height: 80px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
    z-index: 1;

    .oculto {
        visibility: hidden;
    }
`

export default Navbar;
