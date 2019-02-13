import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  background-color: #f7f7fa;
  border-radius: 60px;
  height: 450px;
  width: 31%;
`;

const Social = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 100px;
  box-shadow: 0px 20px 50px #ddd;
  display: flex;
  justify-content: flex-start;
  top: 0;
  height: 100px;
  width: 100%;
  img {
    border: solid #626262 1px;
    border-radius: 100%;
    height: 70px;
    margin: 0 20px 0 20px;
    width: 70px;
  }
  div {
    p {
      color: #626262;
      font-size: 22px;
      font-weight: initial;
      margin: 0px;
    }
    p:first-child {
      font-size: 14px;
    }
  }
`;

class Account extends Component {
  render() {
    return (
      <Main>
        <Social>
          <img alt="" />
          <div>
            <p>{this.props.social}</p>
            <p>Sample</p>
          </div>
        </Social>
      </Main>
    );
  }
}

export default Account;
