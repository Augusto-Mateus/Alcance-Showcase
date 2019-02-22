import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

import Context from "../../context";
import Rank from "../atoms/rank";
import width from "../../config";

const Main = styled.div`
  background-color: #fd6d80;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 725px;
  justify-content: center;
  padding: ${width <= 768 ? "20px" : "0px 170px 0px 170px"};
`;

const Div = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 0 0px 0;
`;

const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  p:first-child {
    font-size: ${width <= 768 ? "30px" : "40px"};
  }
  p:last-child {
    font-size: auto;
  }
`;

const Input = styled.input`
  align-self: center;
  background-color: rgba(0, 0, 0, 0);
  border: solid #fff 2px;
  border-radius: 100px;
  color: #fff;
  font-size: ${width <= 768 ? "20px" : "45px"};
  height: ${width <= 768 ? "30px" : "60px"};
  text-align: center;
  text-justify: center;
  width: 70%;
  ::placeholder {
    color: #fff;
    font-size: ${width <= 768 ? "20px" : "45px"};
    font-weight: bold;
    text-align: center;
    text-justify: center;
  }
`;

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      indicators: false,
      interval: 0,
      direction: null
    };
    this.handleSelect = this.handleSelect.bind(this);

    this.handleValue = event => {
      const { value } = event.target;
      this.context.setContext({ paymentValue: "R$" + value + ",00" });
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction, interval, indicators } = this.state;
    return (
      <Main>
        {width <= 768 ? (
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            interval={interval}
            indicators={indicators}
          >
            <Carousel.Item>
              <SubDiv>
                <p>
                  Lorem {width > 768 && <br />} impsum dolor{" "}
                  {width > 768 && <br />} sit amet.
                </p>
                <Input
                  placeholder="R$2.000,00"
                  type="number"
                  onChange={this.handleValue}
                />
                <p>
                  Voce pode digitar valores diferentes {width > 768 && <br />}{" "}
                  para ver outras opções de anuncio.
                </p>
              </SubDiv>
            </Carousel.Item>
            <Carousel.Item>
              <Rank />
            </Carousel.Item>
          </Carousel>
        ) : (
          <Div>
            <SubDiv>
              <p>
                Lorem {width > 768 && <br />} impsum dolor{" "}
                {width > 768 && <br />} sit amet.
              </p>
              <Input
                placeholder="R$2.000,00"
                type="number"
                onChange={this.handleValue}
              />
              <p>
                Voce pode digitar valores diferentes {width > 768 && <br />}{" "}
                para ver outras opções de anuncio.
              </p>
            </SubDiv>
            <Rank />
          </Div>
        )}
      </Main>
    );
  }
}

Ranking.contextType = Context;

export default Ranking;
