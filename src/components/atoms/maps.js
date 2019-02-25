import React, { Component } from "react";
import styled from "styled-components";
import Context from "../../context";

import MapsApi from "../particles/mapsApi";
import width from "../../config";

const Inputs = ["Localização", "Raio"];

const Main = styled.div`
  align-items: center;
  background: linear-gradient(to right, #fa7778, #fdb851);
  border-radius: 65px;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: ${width <= 768 ? "450px" : "580px"};
  justify-content: center;
  width: ${width <= 768 ? "300px" : "550px"};

  div {
    display: flex;
    ${width <= 768 && "flex-direction: column;"}
    div {
      display: flex;
      flex-direction: column;
      margin: 12px;
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
    this.state = {
      Localização: "",
      Raio: ""
    };
  }

  render() {
    return (
      <Main>
        <div>
          <div>
            <p>{Inputs[0]}</p>
            <input />
          </div>
          <div>
            <p>{Inputs[1]}</p>
            <input placeholder="Km" type="number" />
          </div>
        </div>
        <div>
          <MapsApi />
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
