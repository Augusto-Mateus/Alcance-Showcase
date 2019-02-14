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
        ? "0" + this.valueMonth.toString()
        : this.valueMonth.toString();
    this.day = this.newDate.getDate();
    //Input prompt values
    this.prompt = () => {
      // Day prompt
      const initialDay = this.state.initialDate.slice(8, 10).valueOf();
      const finalDay = this.state.finalDate.slice(8, 10).valueOf();
      this.setState({ promptDay: initialDay - finalDay });

      // Month prompt
      const initialMonth = this.state.initialMonth.slice(8, 10).valueOf();
      const finalMonth = this.state.finalMonth.slice(8, 10).valueOf();
      this.setState({ promptMonth: initialMonth - finalMonth });
    };

    this.setInitialDate = event => {
      const { value } = event.target;
      this.setState({ initialDate: value });
      this.prompt();
    };
    this.setFinalDate = event => {
      const { value } = event.target;
      this.setState({ finalDate: value });
      this.prompt();
    };
    //States
    this.state = {
      initialDate: "",
      finalDate: "",
      promptDay: "",
      promptMonth: ""
    };
  }
  render() {
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
                defaultValue={this.year + "-" + this.month + "-" + this.day}
                onChange={this.setInitialDate}
              />
            </div>
            <hr />
            <div>
              <p>Data de Encerramento:</p>
              <input
                type="date"
                defaultValue={this.year + "-" + this.month + "-" + this.day}
                onChange={this.setFinalDate}
              />
            </div>
          </SubDivB>
        </SubDiv>
        <p>Tempo de duração da campanha</p>
        <h4>
          {this.state.promptMonth} Meses e {this.state.promptDay} Dias
        </h4>
      </Main>
    );
  }
}

export default DuracaoDeCampanha;
