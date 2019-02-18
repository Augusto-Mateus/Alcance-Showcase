import React, { Component } from "react";
import styled from "styled-components";
import Ellipse from "../../static/Ellipse.png";

const loads = ["load 1", "load 2", "load 3", "load 4"];

const Main = styled.div`
  align-items: center;
  display: flex;
  color: #fff;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 50px 0 0 0;
  width: 100%;
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
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
  p:first-child {
    font-size: 40px;
    font-weight: bold;
    margin: 0 0 0 0;
  }
  p:last-child {
    margin: 0 0 0 0;
  }
`;

class CircularGraph extends Component {
  render() {
    return (
      <Main>
        {loads.map(load => {
          return (
            <Div key={load}>
              <SubDiv>
                <p>100%</p>
                <p>Completo</p>
              </SubDiv>
              <p>{load}</p>
            </Div>
          );
        })}
      </Main>
    );
  }
}

export default CircularGraph;
