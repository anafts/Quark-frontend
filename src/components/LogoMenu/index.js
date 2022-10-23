import styled from 'styled-components';
import logo from '../../icons/logo.svg';

const LogoMenu = styled.a `
    content: url(${logo});
    height: 50px;
    width: 199px;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`

export default LogoMenu;