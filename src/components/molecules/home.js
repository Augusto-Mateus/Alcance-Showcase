import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../static/Logo.png";

import Login from "../atoms/login";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 275px;
  h1 {
    font-size: 50px;
  }
`;

const SubDiv = styled.div`
  color: #fff;
  img {
    height: 60px;
    margin-top: -40px;
    width: 68px;
  }
`;

class Home extends Component {
  render() {
    return (
      <Main>
        <SubDiv>
          <img alt="Logo" src={Logo} />
          <h1>
            Uma nova maneira <br /> de alcançar.
          </h1>
        </SubDiv>
        <Login />
      </Main>
    );
  }
}

export default Home;
