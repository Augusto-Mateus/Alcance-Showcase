import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../static/Logo.png";

import Login from "../atoms/login";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 580px;
  justify-content: space-between;
`;

const SubDiv = styled.div`
  color: #fff;
  img {
    height: 55px;
    margin-top: -40px;
    width: 60px;
  }
  h1 {
    margin-top: 0px;
    font-size: 52px;
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
