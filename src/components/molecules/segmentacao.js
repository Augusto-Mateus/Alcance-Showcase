import React, { Component } from "react";
import styled from "styled-components";

import CircularLoad from "../particles/circularLoad";
import LoadBar from "../particles/loadBar";

const StyledSegmentacao = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Section = styled.p`
  color: #069dc8;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Txt = styled.p`
  color: #999;
  font-size: 20px;
`;

class Segmentacao extends Component {
  render() {
    return (
      <StyledSegmentacao>
        <Section>Segmentação</Section>
        <br />
        <LoadBar />
        <Txt>Ótimo, estamos quase lá!</Txt>
        <CircularLoad />
      </StyledSegmentacao>
    );
  }
}

export default Segmentacao;
