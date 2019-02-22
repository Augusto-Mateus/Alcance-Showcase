import React, { Component } from "react";
import styled from "styled-components";

import Facebook from "../../static/facebook.png";
import Instagram from "../../static/instagram.png";
import Spotify from "../../static/spotify.png";
import width from "../../config";

const icons = [Facebook, Instagram, Spotify];

const Main = styled.div`
  background-color: #f7f7fa;
  border-radius: 60px;
  height: 450px;
  width: ${width <= 768 ? "280px" : "31%"};
`;

const Div = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 100px;
  box-shadow: 0px 20px 50px #ddd;
  display: flex;
  justify-content: flex-start;
  top: 0;
  height: 100px;
  width: 100%;
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

const SubDiv = styled.div`
  align-items: center;
  border: solid #626262 1px;
  border-radius: 100%;
  display: flex;
  height: 70px;
  justify-content: center;
  margin: 0 20px 0 20px;
  width: 70px;
  img {
    height: 40px;
  }
`;

class Account extends Component {
  render() {
    return (
      <Main>
        <Div>
          <SubDiv>
            <img alt="Icon" src={icons[this.props.img]} />
          </SubDiv>
          <div>
            <p>{this.props.social}</p>
            <p>Sample</p>
          </div>
        </Div>
      </Main>
    );
  }
}

export default Account;
