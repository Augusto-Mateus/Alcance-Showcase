import React, { Component } from "react";
import styled from "styled-components";

import Account from "../atoms/account";

const accounts = ["FaceBook", "Instagram", "Youtube"];

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
    margin-top: 30px;
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
            return <Account social={account} />;
          })}
        </Accounts>
      </Main>
    );
  }
}

export default Contas;
