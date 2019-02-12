import React, { Component } from "react";
import styled from "styled-components";

import CircularGraph from "../particles/circularGraph";
import LoadBar from "../particles/loadBar";
import NextSectionButton from "../particles/nextSectionButton";

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  h1 {
    color: #069dc8;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

const Txt = styled.p`
  color: #999;
  font-size: 20px;
`;

class Segmentacao extends Component {
  render() {
    return (
      <Main>
        <h1>Segmentação</h1>
        <br />
        <LoadBar />
        <Txt>Ótimo, estamos quase lá!</Txt>
        <CircularGraph />
        <NextSectionButton />
      </Main>
    );
  }
}

export default Segmentacao;
