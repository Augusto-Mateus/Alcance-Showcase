import React, { Component } from "react";
import styled from "styled-components";

import Calendar from "../../static/calendario.png";
import NextSectionButton from "../particles/nextSectionButton";

const Main = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  margin-top: 100px;
  div {
    hr {
      border: solid 1px #626262;
      height: 100px;
      margin: 0;
    }
  }
  p:first-child {
    font-size: 30px;
  }
  h4 {
    margin: 0px;
  }
  span {
    height: 158px;
  }
`;

const Info = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  color: #626262;
  display: flex;
  height: 200px;
  width: 90%;
`;

const Icon = styled.div`
  align-items: center;
  background: linear-gradient(#01d2c6, #05aac7);
  border-radius: 50px;
  display: flex;
  height: 170px;
  justify-content: center;
  padding-top: 30px;
  width: 23%;
  img {
    height: 180px;
  }
`;

const SubDiv = styled.div`
  align-items: center;
  background-color: #fff;
  color: #626262;
  display: flex;
  font-size: 20px;
  justify-content: space-around;
  text-align: center;
  width: 77%;
  p {
    margin-top: 0px;
  }
  input {
    border: #069dc8 inset 2px;
    border-radius: 100px;
    font-size: 20px;
    height: 45px;
    text-indent: 10px;
    width: 14.5vw;
  }
`;

class DuracaoDeCampanha extends Component {
  render() {
    return (
      <Main>
        <p>Escolha duração de campanha</p>
        <Info>
          <Icon>
            <img src={Calendar} alt="Calendar" />
          </Icon>
          <SubDiv>
            <div>
              <p>Data de Inicio:</p>
              <input type="date" />
            </div>
            <hr />
            <div>
              <p>Data de Encerramento:</p>
              <input type="date" />
            </div>
          </SubDiv>
        </Info>
        <p>Tempo de duração da campanha</p>
        <h4>Valor em dias de duração</h4>
        <span />
        <NextSectionButton />
      </Main>
    );
  }
}

export default DuracaoDeCampanha;
