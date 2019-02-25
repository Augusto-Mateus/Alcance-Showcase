import React, { Component } from "react";
import styled from "styled-components";

import Background from "../../static/DuraçãoDeCampanha.png";
import Calendar from "../../static/calendario.png";
import Context from "../../context";
import width from "../../config";

const Main = styled.div`
  align-items: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  height: 795px;
  justify-content: center;
  padding: ${width <= 768 ? "0 13px 0 13px" : "0px 170px 0px 170px"};
  div {
    hr {
      border: solid 1px #626262;
      height: ${width <= 768 ? "0" : "100px"};
      margin: 0;
      ${width <= 768 && "width: 100px;"}
    }
  }
  p:first-child {
    font-size: 30px;
  }
  h4 {
    ${width <= 768 && "fonst-size: 15px;"}
    margin: 0px;
  }
`;

const Div = styled.div`
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
  height: 200px;
  justify-content: center;
  padding-top: 30px;
  width: 23%;
  img {
    height: 180px;
  }
`;

const SubDivB = styled.div`
  align-items: center;
  ${width <= 768 && "border-radius: 30px;"}
  background-color: #fff;
  color: #626262;
  display: flex;
  ${width <= 768 && "flex-direction: column;"}
  font-size: 20px;
  justify-content: space-around;
  ${width <= 768 && "padding: 10px;"}
  text-align: center;
  width: ${width <= 768 ? "300px" : "77%"};
  p {
    margin: ${width <= 768 ? "0" : "0 auto auto auto"};
  }
  input {
    border: #069dc8 inset 2px;
    border-radius: 100px;
    font-size: 20px;
    height: 45px;
    ${width <= 768 && "margin: 22px;"}
    text-indent: 10px;
    width: ${width <= 768 ? "180px" : "14.5vw"};
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
      this.context.setContext({ initialDate: Date.parse(value) });
      this.setState({ initialDate: Date.parse(value) });
    };
    this.finalDate = event => {
      const { value } = event.target;
      this.context.setContext({ finalDate: Date.parse(value) });
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
      this.valueMonth >= 2
        ? (this.state.finalDate - this.state.initialDate) / 86400000 >= 30
          ? (this.state.finalDate - this.state.initialDate) / 86400000 -
            27 -
            30 * (promptMonth - 1) -
            Math.ceil((2 * promptMonth) / 4)
          : (this.state.finalDate - this.state.initialDate) / 86400000
        : (this.state.finalDate - this.state.initialDate) / 86400000 >= 30
        ? (this.state.finalDate - this.state.initialDate) / 86400000 -
          30 * promptMonth -
          Math.ceil((2 * promptMonth) / 4)
        : (this.state.finalDate - this.state.initialDate) / 86400000;
    return (
      <Main>
        {width <= 768 ? (
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
              <p>Tempo de duração da campanha</p>
              <h4>
                {promptMonth < 1 || isNaN(promptDay) === true
                  ? null
                  : promptMonth + " Meses e "}
                {promptDay < 0 || isNaN(promptDay) === true
                  ? "Este não é um prazo valido"
                  : promptDay + " Dias"}
              </h4>
            </div>
          </SubDivB>
        ) : (
          <>
            <p>Escolha duração de campanha</p>
            <Div>
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
            </Div>
            <p>Tempo de duração da campanha</p>
            <h4>
              {promptMonth < 1 || isNaN(promptDay) === true
                ? null
                : promptMonth + " Meses e "}
              {promptDay < 0 || isNaN(promptDay) === true
                ? "Este não é um prazo valido"
                : promptDay + " Dias"}
            </h4>
          </>
        )}
      </Main>
    );
  }
}

DuracaoDeCampanha.contextType = Context;

export default DuracaoDeCampanha;
