import React, { Component } from "react";
import styled from "styled-components";
import * as firebase from "firebase";

import Button from "../particles/button";
import FacebookButton from "../particles/facebookButton";
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

  a {
    color: #999;
    cursor: default;
    font-size: 10px;
    pointer-events: none;
    text-decoration-line: none;
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleEmail = event => {
      const { value } = event.target;
      this.setState({ email: value });
    };
    this.handlePassword = event => {
      const { value } = event.target;
      this.setState({ password: value });
    };
    this.login = () => {
      const auth = firebase.auth();
      const verification = auth.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      verification.catch(e => alert(e.message));
    };

    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser.email + " esta logado!");
      } else {
        console.log("Error");
      }
    });
  }

  render() {
    return (
      <StyledLogin>
        <FacebookButton name="Login with Facebook" />
        <p>ou</p>
        <Input type="email" event={this.handleEmail} placeholder="E-mail" />
        <Input
          type="password"
          event={this.handlePassword}
          placeholder="Senha"
        />
        <Button name="ENTRAR" event={this.login} />
        <hr />
        <a href="sample">Não possui conta?</a>
        <Button name="CADASTRAR-SE" />
      </StyledLogin>
    );
  }
}

export default Login;
