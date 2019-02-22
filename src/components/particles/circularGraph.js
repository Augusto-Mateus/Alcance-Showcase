import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

import Ellipse from "../../static/Ellipse.png";
import width from "../../config";

const loads = ["load 1", "load 2", "load 3", "load 4"];

const Main = styled.div`
  align-items: center;
  display: flex;
  color: #fff;
  flex-direction: row;
  justify-content: space-around;
  margin: ${width <= 768 ? "0" : "50px 0 0 0"};
  ${width <= 768 && "overflow-x: scroll;"}
  width: 100%;
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubDiv = styled.div`
  align-items: center;
  background: url(${Ellipse});
  background-color: rgba(100, 100, 100, 0.3);
  background-position: center;
  background-size: cover;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  height: 180px;
  justify-content: center;
  width: 180px;
`;

const Percent = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin: 0 0 0 0;
`;

const SimpleTxt = styled.p`
  margin: 0 0 0 0;
`;

class CircularGraph extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      controls: true,
      indicators: false,
      slide: true,
      direction: null,
      interval: 0
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }
  render() {
    const {
      index,
      direction,
      controls,
      indicators,
      slide,
      interval
    } = this.state;
    return (
      <Main>
        {width <= 768 ? (
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            indicators={indicators}
            controls={controls}
            slide={slide}
            interval={interval}
          >
            {loads.map(load => {
              return (
                <Carousel.Item key={load}>
                  <Div key={load}>
                    <SubDiv>
                      <Percent>100%</Percent>
                      <SimpleTxt>Completo</SimpleTxt>
                    </SubDiv>
                    <SimpleTxt>{load}</SimpleTxt>
                  </Div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        ) : (
          loads.map(load => {
            return (
              <Div key={load}>
                <SubDiv>
                  <Percent>100%</Percent>
                  <SimpleTxt>Completo</SimpleTxt>
                </SubDiv>
                <SimpleTxt>{load}</SimpleTxt>
              </Div>
            );
          })
        )}
      </Main>
    );
  }
}

export default CircularGraph;
