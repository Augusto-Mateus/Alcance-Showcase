import React, { Component } from "react";
import styled from "styled-components";

import Iframe from "../atoms/mapsApi";
import AgeRange from "../particles/ageRange";

const webKit = "-webkit-";

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 760px;
  justify-content: center;
  margin: 0 0 0 0;
  padding: 0;
`;

const SubDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 0;
  width: 100%;
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
      <Main>
        <SubDiv>
          <div>
            <StyledText>
              Qual a idade <br /> do público alvo?
            </StyledText>
            <AgeRange />
          </div>
          <Iframe title="Maps">Iframe GoogleMaps</Iframe>
        </SubDiv>
      </Main>
    );
  }
}

export default PublicoAlvo;
