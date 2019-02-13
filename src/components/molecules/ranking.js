import React, { Component } from "react";
import styled from "styled-components";

import Rank from "../atoms/rank";

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 725px;
  justify-content: center;
`;

const SubDiv = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 0 0px 0;
`;

const SubDivA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  p:first-child {
    font-size: 40px;
  }
  p:last-child {
    font-size: auto;
  }
`;

const Input = styled.input`
  align-self: center;
  background-color: rgba(0, 0, 0, 0);
  border: solid #fff 2px;
  border-radius: 100px;
  color: #fff;
  font-size: 45px;
  height: 60px;
  text-align: center;
  text-justify: center;
  width: 70%;
  ::placeholder {
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    text-justify: center;
  }
`;

class Ranking extends Component {
  render() {
    return (
      <Main>
        <SubDiv>
          <SubDivA>
            <p>
              Lorem <br /> impsum dolor <br /> sit amet.
            </p>
            <Input placeholder="R$2.000,00" type="number" />
            <p>
              Voce pode digitar valores diferentes <br /> para ver outras opções
              de anuncio.
            </p>
          </SubDivA>
          <Rank />
        </SubDiv>
      </Main>
    );
  }
}

export default Ranking;
