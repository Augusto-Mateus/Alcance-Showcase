import React, { Component } from "react";
import styled from "styled-components";

import Account from "../atoms/account";
import Background from "../../static/CONTAS.png";

const accounts = ["FaceBook", "Instagram", "Youtube"];

const Main = styled.div`
  align-items: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 650px;
  justify-content: center;
  margin-top: -70px;
  padding: 100px 170px 0px 170px;
  p {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

class Contas extends Component {
  render() {
    return (
      <Main>
        <p>Sample</p>
        <Div>
          {accounts.map(account => {
            return (
              <Account
                social={account}
                key={account}
                img={accounts.indexOf(account)}
              />
            );
          })}
        </Div>
      </Main>
    );
  }
}

export default Contas;
