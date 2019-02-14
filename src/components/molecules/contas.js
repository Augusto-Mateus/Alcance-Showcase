import React, { Component } from "react";
import styled from "styled-components";

import Facebook from "../../static/facebook.png";
import Account from "../atoms/account";

const accounts = ["FaceBook", "Instagram", "Youtube"];

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 650px;
  justify-content: center;
  padding-top: 50px;
  p {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
`;

const Accounts = styled.div`
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
        <Accounts>
          {accounts.map(account => {
            return <Account social={account} key={account} img={Facebook} />;
          })}
        </Accounts>
      </Main>
    );
  }
}

export default Contas;
