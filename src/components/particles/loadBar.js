import React, { Component } from "react";
import styled from "styled-components";

const porcentagem = 43.2;
const webKit = "-webkit-";
const StyledLoadBar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    background: -webkit-linear-gradient(#00dfc5, #069dc8);
    font-size: 80px;
    font-weight: bolder;
    margin: 0 0 0 0;
    ${webKit}background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Bar = styled.div`
  border: solid #999 2px;
  border-radius: 100px;
  height: 15px;
  width: 500px;

  div {
    background-image: linear-gradient(to right, #00dfc5, #069dc8);
    background-repeat: no-repeat;
    border-radius: 100px;
    height: 19px;
    margin-left: -2px;
    margin-top: -2px;
    width: ${porcentagem + 1 + "%"};
  }
`;

class LoadBar extends Component {
  render() {
    return (
      <StyledLoadBar>
        <h1>{porcentagem + "%"}</h1>
        <Bar>
          <div />
        </Bar>
      </StyledLoadBar>
    );
  }
}
export default LoadBar;
