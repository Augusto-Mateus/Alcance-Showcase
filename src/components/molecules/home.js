import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../static/Logo.png";

import Login from "../atoms/login";

const StyledHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 275px;

  h1 {
    font-size: 50px;
  }
`;

const LogoAndSlogam = styled.div`
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
      <StyledHome>
        <LogoAndSlogam>
          <img alt="Logo" src={Logo} />
          <h1>
            Uma nova maneira <br /> de alcançar.
          </h1>
        </LogoAndSlogam>
        <Login />
      </StyledHome>
    );
  }
}

export default Home;
