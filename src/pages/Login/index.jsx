import React from "react";
import * as S from "./style";
import logoLogin from '../../assets/images/logo-login.svg'
import womanLogin from '../../assets/images/woman-login.png'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Login = () => {
    return (
        <S.Container>
            <S.Presentation>
                <img src={logoLogin} />
                <h1>Organize sua vida</h1>
                <h3>Organize seus contatos</h3>
                <img src={womanLogin} />
            </S.Presentation>

            <S.Principal>
                <a href='/'>Não tem uma conta?</a>
                <h1>Bem Vindo!</h1>
                <p>Faça login com seus dados de registro</p>
                <Input placeholder="E-mail"/>
                <Input placeholder="Senha"/>
                <Button>Entrar</Button>
                <hr />
                <span>ou entre com</span>
                <hr />
            </S.Principal>
        </S.Container>
    );
};
