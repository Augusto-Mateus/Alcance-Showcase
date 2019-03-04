import React, { Component } from "react";
import styled from "styled-components";
import Context from "../../context";

import MapsApi from "../particles/mapsApi";
import width from "../../config";

const Inputs = ["Localização", "Raio"];
const type = ["text", "number"];

const Main = styled.div`
  align-items: center;
  background: linear-gradient(to right, #fa7778, #fdb851);
  border-radius: 65px;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: ${width <= 768 ? "450px" : "580px"};
  justify-content: space-evenly;
  width: ${width <= 768 ? "300px" : "550px"};

  div {
    display: flex;
    ${width <= 768 && "flex-direction: column;"}
    div {
      display: flex;
      flex-direction: column;
      margin-right: 12px;
      p {
        margin-bottom: 5px;
      }
      input {
        background-color: rgba(0, 0, 0, 0);
        border: solid #fff 1px;
        border-radius: 100px;
        color: #fff;
        height: 25px;
        text-indent: 10px;
      }
      input::placeholder {
        color: #fff;
        font-size: 15px;
        font-weight: bold;
      }
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
  }
`;

const Div = styled.div`
  margin-top: 0px;
  p:first-child {
    margin: 0;
  }
`;

const Txt = styled.p`
  font-weight: bold;
  margin: 0;
`;

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.Local = e => {
      const { value } = e.target;
      this.context.setContext({
        Localização: value
          .replace(" ", "+")
          .replace(" ", "+")
          .replace(" ", "+")
          .replace(" ", "+")
          .replace(" ", "+")
          .replace(" ", "+")
          .replace(" ", "+")
          .replace(" ", "+")
          .replace(" ", "+")
          .replace(" ", "+")
      });
    };
    this.Radius = e => {
      const { value } = e.target;
      this.context.setContext({
        Radius: value
      });
    };
  }

  componentDidMount() {
    this.context.setContext({
      Localização: "R.+Sacadura+Cabral+248+Lapa+São+Paulo+SP",
      Radius: 0
    });
  }

  render() {
    const { Localização, Raio } = this.state;
    return (
      <Main>
        <div>
          <div>
            <p>{Inputs[0]}</p>
            <input
              placeholder={Inputs[0]}
              type={type[0]}
              onChange={this.Local}
            />
          </div>
          <div>
            <p>{Inputs[1]}</p>
            <input
              placeholder={Inputs[1]}
              type={type[1]}
              onChange={this.Radius}
            />
          </div>
        </div>
        <div>
          <MapsApi local={Localização} raio={Raio} />
          <Div>
            <p>Alcance diário estimado em pessoas</p>
            <Txt>2.000.000 as 3.500.000</Txt>
          </Div>
        </div>
      </Main>
    );
  }
}

Maps.contextType = Context;

export default Maps;
