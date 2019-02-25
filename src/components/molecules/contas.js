import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

import Account from "../atoms/account";
import Background from "../../static/CONTAS.png";
import width from "../../config";

const accounts = ["FaceBook", "Instagram", "Youtube"];

const Main = styled.div`
  align-items: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 680px;
  justify-content: center;
  margin-top: ${width <= 768 ? "-50px" : "-90px"};
  padding: ${width <= 768 ? "120px 13px 0 13px" : "120px 170px 0px 170px"};
  p {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

class Contas extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      indicators: false,
      interval: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction, indicators, interval } = this.state;
    return (
      <Main>
        {width <= 768 ? (
          <>
            <p>Sample</p>
            <Carousel
              activeIndex={index}
              direction={direction}
              indicators={indicators}
              interval={interval}
              onSelect={this.handleSelect}
            >
              {accounts.map(account => {
                return (
                  <Carousel.Item key={account}>
                    <Div>
                      <Account
                        social={account}
                        img={accounts.indexOf(account)}
                      />
                    </Div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </>
        ) : (
          <>
            <p>Sample</p>
            <Div>
              {accounts.map(account => {
                return (
                  <Account
                    social={account}
                    key={account}
                    img={accounts.indexOf(account)}
                  />
                );
              })}
            </Div>
          </>
        )}
      </Main>
    );
  }
}

export default Contas;
