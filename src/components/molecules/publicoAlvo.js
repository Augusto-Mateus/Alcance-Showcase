import React, { Component } from "react";
import styled from "styled-components";

import Iframe from "../atoms/iframe";
import AgeRange from "../particles/ageRange";
import NextSectionButton from "../particles/nextSectionButton";

const webKit = "-webkit-";

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 75px 0 0 0;
  padding: 0;
`;

const StyledPublicoAlvo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 85px 0;
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
        <StyledPublicoAlvo>
          <div>
            <StyledText>
              Qual a idade <br /> do público alvo?
            </StyledText>
            <AgeRange />
          </div>
          <Iframe title="Maps">Iframe GoogleMaps</Iframe>
        </StyledPublicoAlvo>
        <NextSectionButton />
      </Main>
    );
  }
}

export default PublicoAlvo;
