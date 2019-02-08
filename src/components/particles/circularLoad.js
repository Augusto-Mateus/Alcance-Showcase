import React, { Component } from "react";
import styled from "styled-components";
import Ellipse from "../../static/Ellipse.png";

const loads = ["load 1", "load 2", "load 3", "load 4"];

const Graficos = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: row;
  margin-top: 120px;

  p {
    margin-top: 20px;
  }
`;

const Grafico = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Circular = styled.div`
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
  margin: 20px 20px 7px 20px;
  width: 180px;
  transform: rotate(0);
  transition: ease 0.3s;

  p:first-child {
    font-size: 40px;
    font-weight: bold;
    margin: 0 0 0 0;
  }

  p:last-child {
    margin: 0 0 0 0;
  }
`;

class CircularLoad extends Component {
  render() {
    return (
      <Graficos>
        {loads.map(load => {
          return (
            <Grafico key={load}>
              <Circular>
                <p>100%</p>
                <p>Completo</p>
              </Circular>
              <p>{load}</p>
            </Grafico>
          );
        })}
      </Graficos>
    );
  }
}

export default CircularLoad;
