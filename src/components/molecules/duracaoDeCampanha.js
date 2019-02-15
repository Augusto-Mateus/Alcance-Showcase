import React, { Component } from "react";
import styled from "styled-components";

import Calendar from "../../static/calendario.png";

const Main = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  height: 795px;
  justify-content: center;
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
`;

const SubDiv = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  color: #626262;
  display: flex;
  height: 200px;
  width: 90%;
`;

const SubDivA = styled.div`
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

const SubDivB = styled.div`
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
  constructor(props) {
    super(props);
    //Default date input
    this.newDate = new Date();
    this.year = this.newDate.getFullYear();
    this.valueMonth = this.newDate.getMonth() + 1;
    this.month =
      this.valueMonth.toString().length === 1
        ? "0" + this.valueMonth
        : this.valueMonth;
    this.day = this.newDate.getDate();
    this.defaultDate = this.year + "-" + this.month + "-" + this.day;
    //Input prompt values
    this.initialDate = event => {
      const { value } = event.target;
      this.setState({ initialDate: Date.parse(value) });
    };
    this.finalDate = event => {
      const { value } = event.target;
      this.setState({ finalDate: Date.parse(value) });
    };
    //States
    this.state = {
      initialDate: Date.parse(this.defaultDate),
      finalDate: Date.parse(this.defaultDate)
    };
  }

  render() {
    const promptMonth = Math.floor(
      (this.state.finalDate - this.state.initialDate) / 86400000 / 30
    );
    const promptDay =
      (this.state.finalDate - this.state.initialDate) / 86400000 >= 30
        ? (this.state.finalDate - this.state.initialDate) / 86400000 -
          30 * promptMonth -
          Math.ceil((2 * promptMonth) / 4)
        : (this.state.finalDate - this.state.initialDate) / 86400000;
    return (
      <Main>
        <p>Escolha duração de campanha</p>
        <SubDiv>
          <SubDivA>
            <img src={Calendar} alt="Calendar" />
          </SubDivA>
          <SubDivB>
            <div>
              <p>Data de Inicio:</p>
              <input
                type="date"
                defaultValue={this.defaultDate}
                onChange={this.initialDate}
              />
            </div>
            <hr />
            <div>
              <p>Data de Encerramento:</p>
              <input
                type="date"
                defaultValue={this.defaultDate}
                onChange={this.finalDate}
              />
            </div>
          </SubDivB>
        </SubDiv>
        <p>Tempo de duração da campanha</p>
        <h4>
          {promptMonth < 1 || isNaN(promptDay) === true
            ? null
            : promptMonth + " Meses e "}
          {promptDay < 0 || isNaN(promptDay) === true
            ? "Este não é um prazo valido"
            : promptDay + " Dias"}
        </h4>
      </Main>
    );
  }
}

export default DuracaoDeCampanha;
