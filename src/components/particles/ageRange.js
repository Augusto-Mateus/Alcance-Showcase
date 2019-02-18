import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  align-items: center;
  display: flex;
  margin-top: 50px;

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
  height: 150px;
  justify-content: center;
  padding: 0;
  width: 150px;

  input {
    align-items: center;
    background-color: #eaeaea;
    border: none;
    border-radius: 100px;
    color: #fa7778;
    display: flex;
    font-size: 75px;
    height: 140px;
    justify-content: center;
    margin: 0;
    text-align: center;
    text-indent: 15px;
    width: 140px;

    input:placeholder {
      color: #fa7778;
      font-size: 75px;
    }
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
