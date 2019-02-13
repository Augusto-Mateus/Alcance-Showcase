import React, { Component } from "react";
import styled from "styled-components";

const porcentagem = 91.2;
const webKit = "-webkit-";

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    background: linear-gradient(to right, #00dfc5, #069dc8);
    font-size: 90px;
    font-weight: bolder;
    margin: 0 0 20px 0;
    ${webKit}background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SubDiv = styled.div`
  border: solid #999 2px;
  border-radius: 100px;
  height: 20px;
  width: 450px;
  div {
    background-image: linear-gradient(to right, #00dfc5, #069dc8);
    background-repeat: no-repeat;
    border-radius: 100px;
    height: 24px;
    margin-left: -2px;
    margin-top: -2px;
    width: ${porcentagem + 1 + "%"};
  }
`;

class LoadBar extends Component {
  render() {
    return (
      <Main>
        <h1>{porcentagem + "%"}</h1>
        <SubDiv>
          <div />
        </SubDiv>
      </Main>
    );
  }
}
export default LoadBar;
