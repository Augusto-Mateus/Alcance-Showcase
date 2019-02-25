import React, { Component } from "react";
import styled from "styled-components";

import width from "../../config";

const Main = styled.div`
  align-items: center;
  display: flex;
  margin-top: ${width <= 768 ? "0" : "50px"};

  hr {
    background-color: #626262;
    border: none;
    height: 25px;
    margin: 20px;
    transform: rotate(90deg);
    width: 10px;
  }
`;

const Div = styled.div`
  align-items: center;
  background: linear-gradient(to right, #fa7778, #fdb851);
  border-radius: 100px;
  display: flex;
  height: ${width <= 768 ? "110px" : "150px"};
  justify-content: center;
  padding: 0;
  width: ${width <= 768 ? "110px" : "150px"};

  input {
    align-items: center;
    background-color: #eaeaea;
    border: none;
    border-radius: 100px;
    color: #fa7778;
    display: flex;
    font-size: ${width <= 768 ? "60px" : "75px"};
    height: ${width <= 768 ? "100px" : "140px"};
    margin: 0;
    text-align: center;
    ${width >= 768 && "text-indent: 15px;"}
    width: ${width <= 768 ? "100px" : "140px"};
  }
`;

class AgeRange extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Main>
        <Div>
          <input type="number" min="1" max="99" defaultValue="17" />
        </Div>
        <hr />
        <Div>
          <input type="number" min="1" max="99" defaultValue="25" />
        </Div>
      </Main>
    );
  }
}

export default AgeRange;
