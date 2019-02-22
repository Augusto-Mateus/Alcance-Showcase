import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../static/Logo.png";

import width from "../../config";
import Login from "../atoms/login";

const Main = styled.div`
  ${width <= 768 && "align-items: center;"}
  display: flex;
  flex-direction: ${width <= 768 ? "column" : "row"};
  height: 580px;
  justify-content: ${width <= 768 ? "space-evenly" : "space-between"};
  ${width <= 768 && "padding: 20px 10px 0 10px;"}
`;

const SubDiv = styled.div`
  ${width <= 768 && "display: flex; justify-content: space-between;"}
  color: #fff;
  img {
    height: 55px;
    margin-top: ${width <= 768 ? 0 : "-40px"};
    width: 60px;
  }
  h1 {
    margin-top: 0px;
    font-size: ${width <= 768 ? "40px" : "52px"};
  }
`;

class Home extends Component {
  render() {
    return (
      <Main>
        <SubDiv>
          <img alt="Logo" src={Logo} />
          <h1>Uma nova maneira {width <= 768 ? null : <br />} de alcançar.</h1>
        </SubDiv>
        <Login />
      </Main>
    );
  }
}

export default Home;
