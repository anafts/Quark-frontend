import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

import FormLogin from "../components/Login";
import LoginLogo from "../components/Login/LoginLogo";
import Logo from "../icons/logo.svg";
import Input from "../components/Form/Input";
import SaveButton from "../components/Buttons/Save"

function Login() {
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleFormSubmit = (event) => {
        event.preventDefault()

        axios.post('http://localhost:80/login', {
            email: login,
            password: password
        })
        .then((response) => {
            navigate('/skill')
        })
        .catch((error) => {
            navigate('/signup')
        })
    }

    return (
        <>
            <FormLogin onSubmit={handleFormSubmit}>
                <LoginLogo src={Logo} />

                <Input type="text" placeholder="Login" onChange={event => setLogin(event.currentTarget.value)} value={login} required />
                <Input type="password" placeholder="Senha" minLength="8" onChange={event => setPassword(event.currentTarget.value)} value={password} required />

                <SaveButton type="Submit">Entrar</SaveButton>
            </FormLogin>
        </>
    );
}

export default Login;