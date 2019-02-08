import React, { Component } from "react";
import styled from "styled-components";

import Iframe from "../atoms/iframe";
import AgeRange from "../particles/ageRange";

const webKit = "-webkit-";

const StyledPublicoAlvo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 75px;
`;

const StyledText = styled.p`
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
      <StyledPublicoAlvo>
        <div>
          <StyledText>
            Qual a idade <br /> do público alvo?
          </StyledText>
          <AgeRange />
        </div>
        <Iframe title="Maps">Iframe GoogleMaps</Iframe>
      </StyledPublicoAlvo>
    );
  }
}

export default PublicoAlvo;
