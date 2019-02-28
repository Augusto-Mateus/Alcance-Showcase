import React, { Component } from "react";
import styled from "styled-components";

import Facebook from "../../static/facebook.png";
import Instagram from "../../static/instagram.png";
import Spotify from "../../static/spotify.png";
import width from "../../config";

const icons = [Facebook, Instagram, Spotify];

const Main = styled.div`
  background: #f7f7fa;
  border-radius: 50px;
  height: 450px;
  overflow: hidden;
  position: relative;
  width: ${width <= 768 ? "280px" : "31%"};
  &:after {
    bottom: 0;
    content: "";
    height: 5rem;
    position: absolute;
    width: 100%;
    background-image: linear-gradient(to bottom, transparent, white);
  }
`;

const Div = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 100vw;
  box-shadow: 0px 20px 80px 3px #ccc;
  margin: 0;
  display: flex;
  height: 100px;
  justify-content: flex-start;
  width: 100%;
  padding: 0rem;
  position: sticky;
  top: 0;

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

const Scroller = styled.div`
  margin-top: -10px;
  height: 80%;
  ${width <= 768 ? "overflow-x: hidden;" : "overflow-y: scroll;"}
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-button {
    height: 30px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 7px;
    &:hover {
      background: #888;
    }
  }
`;

const Sample = styled.div`
  background-color: #626262;
  border-radius: 8px;
  height: 80px;
  margin: 30px 0 0 20px;
  width: 80%;
  padding: 0;
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
        <Scroller onClick={this.check}>
          <Sample />
          <Sample />
          <Sample />
          <Sample />
          <Sample />
          <Sample />
          <Sample />
          <Sample />
          <Sample />
          <Sample />
          <Sample />
        </Scroller>
      </Main>
    );
  }
}

export default Account;
