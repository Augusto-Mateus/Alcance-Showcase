import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import Background from "../../static/DuraçãoDeCampanha.png";
import Calendar from "../../static/calendario.png";

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
  padding: 0px 170px 0px 170px;
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
      const { value } = event.target.replace("-", "").replace("-", "");
      this.setState({ initialDate: value });
    };
    this.finalDate = event => {
      const { value } = event.target;
      const day = value.substring(8, 10);
      const month = value.substring(5, 7);
      const year = value.substring(0, 4);
      this.setState({ finalDay: day });
      console.log(this.state.day);
    };

    this.Prompt = () => {
      const prompt = moment(this.state.initialDate, "yyyymmdd")
        .add(this.state.finalDay, "day")
        .calendar();
      this.setState({ prompt: prompt });
    };

    //states
    this.state = {
      initialDate: this.defaultDate,
      prompt: this.prompt
    };
  }

  render() {
    return (
      <Main>
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
        <h4>{this.state.day}</h4>
      </Main>
    );
  }
}

export default DuracaoDeCampanha;
