import React, { Component } from "react";
import styled from "styled-components";

import AgeRange from "../particles/ageRange";
import MapsApi from "../atoms/mapsApi";
import Background from "../../static/públicoAlvo.png";

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
  padding: 0px 170px 0px 170px;
`;

const Div = styled.div`
  align-items: center;
  display: flex;
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
  render() {
    return (
      <Main>
        <Div>
          <div>
            <Txt>
              Qual a idade <br /> do público alvo?
            </Txt>
            <AgeRange />
          </div>
          <MapsApi title="Maps">MapsApi</MapsApi>
        </Div>
      </Main>
    );
  }
}

export default PublicoAlvo;
