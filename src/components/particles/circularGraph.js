import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

import Ellipse from "../../static/Ellipse.png";
import width from "../../config";

const loads = ["load 1", "load 2", "load 3", "load 4"];
const key = [
  "palavra chave 0",
  "palavra chave 1",
  "palavra chave 2",
  "palavra chave 3",
  "palavra chave 4",
  "palavra chave 5",
  "palavra chave 6",
  "palavra chave 7",
  "palavra chave 8",
  "palavra chave 9"
];

const Main = styled.div`
  align-items: center;
  display: flex;
  color: #fff;
  flex-direction: row;
  justify-content: center;
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
  ${width > 768 && "margin: 0 20px 0 20px;"}
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

const ToggleDiv = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  filter: none;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const KeyList = styled.div`
  background-color: #51eaea;
  border-radius: 40px;
  color: #626262;
  height: 350px;
  ${width <= 768 ? "overflow-x: hidden;" : "overflow-y: scroll;"}
  width: 300px;
  &::-webkit-scrollbar {
    width: 0.4rem;
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
  div {
    align-items: center;
    display: flex;
    font-size: 16px;
    justify-content: space-evenly;
    margin-left: -25px;
  }
  input {
    margin-top: -12px;
  }
  button {
    background-color: transparent;
    border: none;
    border-radius: 100vw;
    height: 20px;
    margin-top: -12px;
    width: 20px;
  }
`;

const SubToggle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  h6 {
    margin-left: 30px;
  }
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

    this.toggle = () => {
      this.setState(prevState => ({ open: !prevState.open }));
      console.log(this.state.open);
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
      interval,
      open
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
                  <Div onClick={this.toggle}>
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
                <SubDiv onClick={this.toggle}>
                  <Percent>100%</Percent>
                  <SimpleTxt>Completo</SimpleTxt>
                </SubDiv>
                <SimpleTxt>{load}</SimpleTxt>
              </Div>
            );
          })
        )}
        <div>
          {open ? (
            <ToggleDiv>
              <KeyList>
                <SubToggle>
                  <h6>Selecione suas palavras chaves</h6>
                  <button onClick={this.toggle}>x</button>
                </SubToggle>
                {key.map(keyWords => {
                  return (
                    <div>
                      <input type="checkbox" key={keyWords} />
                      <p>{keyWords}</p>
                    </div>
                  );
                })}
              </KeyList>
            </ToggleDiv>
          ) : null}
        </div>
      </Main>
    );
  }
}

export default CircularGraph;
