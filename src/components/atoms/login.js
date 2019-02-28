import React, { Component } from "react";
import styled from "styled-components";
import * as firebase from "firebase";
import FirebaseAuth from "react-firebaseui/FirebaseAuth";

import Button from "../particles/button";
import Input from "../particles/input";
import Context from "../../context";
import width from "../../config";

const Main = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  width: ${width <= 768 ? "300px" : "360px"};

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

const FacebookBtn = styled(FirebaseAuth)`
  button {
    border-radius: 100vw;
    height: 35px;
    margin: 0;
    width: 100%;
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.toggle = () =>
      this.context.setContext(prevContext => ({ logged: !prevContext.logged }));

    this.uiConfig = {
      signInflow: "popup",
      signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
      callBacks: { signInsuccess: () => false }
    };

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
      verification.catch(e => {
        alert(e);
      });
    };

    this.logout = () => {
      firebase.auth().signOut();
      this.toggle();
    };

    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.setState({ email: firebaseUser.email });
        this.toggle();
        window.scrollTo(0, 850);
      } else {
        console.log("Error");
      }
    });
  }

  render() {
    const { logged } = this.context;
    return (
      <Main>
        {!logged ? (
          <>
            <FacebookBtn
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
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
          </>
        ) : (
          <>
            <p>
              Bem Vindo <br />
              {this.state.email}
            </p>
            <Button event={this.logout} name="Logout" />
          </>
        )}
      </Main>
    );
  }
}

Login.contextType = Context;

export default Login;
