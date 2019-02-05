import React, { Component } from "react";
import styled from "styled-components";

import Button from "../particles/button";
import Input from "../particles/input";

const StyledLogin = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  height: 380px;
  justify-content: center;
  width: 320px;

  p {
    margin: 5px;
  }

  hr {
    border: 0.5px solid #ccc;
    width: 75%;
  }
`;

class Login extends Component {
  render() {
    return (
      <StyledLogin>
        <Button name="Facebook Button" />
        <p>ou</p>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <Button name="Entrar" type="submit" />
        <hr />
        <p>Não possui conta?</p>
        <Button name="Cadastre-se" />
      </StyledLogin>
    );
  }
}

export default Login;
