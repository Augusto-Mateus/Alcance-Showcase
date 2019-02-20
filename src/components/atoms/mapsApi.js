import React, { Component } from "react";
import styled from "styled-components";
import Context from "../../context";

import Maps from "../particles/maps";

const Inputs = ["Localização", "Raio"];
const Type = ["text", "number"];
const Placeholder = ["Sua Localização", "Km"];

const Main = styled.div`
  align-items: center;
  background: linear-gradient(to right, #fa7778, #fdb851);
  border-radius: 65px;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 580px;
  justify-content: center;
  width: 550px;

  div {
    display: flex;
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
    flex-direction: column;
  }
`;

const Txt = styled.p`
  font-weight: bold;
  margin: 0;
`;

class MapsApi extends Component {
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
          {Inputs.map(input => {
            return (
              <div key={input}>
                <p>{input}</p>
                <input
                  placeholder={Placeholder[Inputs.indexOf(input)]}
                  type={Type[Inputs.indexOf(input)]}
                />
              </div>
            );
          })}
        </div>
        <div>
          <Maps />
          <p>Alcance diário estimado em pessoas</p>
          <Txt>2.000.000 as 3.500.000</Txt>
        </div>
      </Main>
    );
  }
}

MapsApi.contextType = Context;

export default MapsApi;
