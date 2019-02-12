import React, { Component } from "react";
import styled from "styled-components";

import NextSectionButton from "../particles/nextSectionButton";

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubDiv = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 80px 0 80px 0;
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

const SubDivB = styled.div`
  background-color: #f4d8dc;
  background-image: linear-gradient(
    to top,
    rgba(300, 300, 300, 0.6),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
  border-radius: 50px;
  height: 500px;
  width: 500px;
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
            <Input placeholder="R$2.000,00" type="number" step="0.01" />
            <p>
              Voce pode digitar valores diferentes <br /> para ver outras opções
              de anuncio.
            </p>
          </SubDivA>
          <SubDivB />
        </SubDiv>
        <NextSectionButton />
      </Main>
    );
  }
}

export default Ranking;
