import React, { Component } from "react";
import styled from "styled-components";

import AgeRange from "../particles/ageRange";
import Background from "../../static/públicoAlvo.png";
import Carousel from "react-bootstrap/Carousel";
import Maps from "../atoms/maps";
import width from "../../config";

const webKit = "-webkit-";

const Main = styled.div`
  align-items: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 760px;
  justify-content: center;
  margin: 0 0 0 0;
  padding: ${width <= 768 ? "0" : "0px 170px 0px 170px"};
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  ${width <= 768 && "flex-direction: column;"}
  justify-content: space-between;
  margin: 0 0 0 0;
  width: 100%;
`;

const Txt = styled.p`
  background: linear-gradient(to right, #fa7778, #fdb851);
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  ${webKit}background-clip: text;
  -webkit-text-fill-color: transparent;
`;

class PublicoAlvo extends Component {
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
          <Carousel
            activeIndex={index}
            direction={direction}
            indicators={indicators}
            interval={interval}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <Div>
                <Txt>
                  Qual a idade <br /> do público alvo?
                </Txt>
                <AgeRange />
              </Div>
            </Carousel.Item>
            <Carousel.Item>
              <Maps title="Maps" />
            </Carousel.Item>
          </Carousel>
        ) : (
          <Div>
            <div>
              <Txt>
                Qual a idade <br /> do público alvo?
              </Txt>
              <AgeRange />
            </div>
            <Maps title="Maps" />
          </Div>
        )}
      </Main>
    );
  }
}

export default PublicoAlvo;
