import React, { Component } from "react";
import styled from "styled-components";

import CircularGraph from "../particles/circularGraph";
import LoadBar from "../particles/loadBar";
import Background from "../../static/segmentação.png";

const Main = styled.div`
  align-items: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 705px;
  padding: 140px 170px 0px 170px;
`;

const Title = styled.p`
  color: #069dc8;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

const Txt = styled.p`
  color: #999;
  font-size: 30px;
`;

class Segmentacao extends Component {
  render() {
    return (
      <Main>
        <Title>Segmentação</Title>
        <br />
        <br />
        <LoadBar />
        <Txt>Ótimo, estamos quase lá!</Txt>
        <CircularGraph />
      </Main>
    );
  }
}

export default Segmentacao;
