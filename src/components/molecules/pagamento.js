import React, { Component } from "react";
import styled from "styled-components";

import Background from "../../static/PAGAMENTO.png";
import Cartao from "../../static/cartão.png";
import Context from "../../context";
import PaypalBtn from "../particles/paypal";
import width from "../../config";

const Main = styled.div`
  align-items: center;
  background-image: url(${Background});
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 750px;
  justify-content: center;
  padding: ${width <= 768 ? "0 13px 0 13px " : "0px 170px 0px 170px"};
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const SubDivA = styled.div`
  align-items: center;
  background-color: #0000c1;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  display: flex;
  height: 250px;
  justify-content: space-around;
  width: 50%;
  img {
    height: 100px;
    width: 100px;
  }
  p {
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    margin-left: -100px;
  }
`;

const SubDivB = styled.div`
  align-items: center;
  background-color: #6f43e0;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-around;
  margin: 0px;
  padding: 0px;
  text-align: center;
  width: ${width <= 768 ? "300px" : "50%"};
  div:first-child {
    align-items: center;
    background-color: #fff;
    border-radius: 33px;
    color: #626262;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    position: relative;
    width: ${width <= 768 ? "300px" : "100%"};
    z-index: 1;
    p {
      margin: 5px;
    }
    hr {
      border: 1px solid #848484;
      margin: 40px;
      width: 50%;
    }
    h1 {
      margin: 0px;
      font-size: 22px;
    }
  }
  div:last-child {
    align-items: center;
    background-color: #6f43e0;
    border-radius: 35px;
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: center;
    width: 100%;
    p {
      margin: 5px;
    }
    h1 {
      font-size: 22px;
      margin: 0px;
    }
  }
`;

class Pagamento extends Component {
  constructor(props) {
    super(props);
    this.newDate = new Date();
    this.valueMonth = this.newDate.getMonth() + 1;
    this.state = {};
  }
  render() {
    const { paymentValue, initialDate, finalDate } = this.context;
    const promptMonth = Math.floor((finalDate - initialDate) / 86400000 / 30);
    const promptDay =
      this.valueMonth >= 2
        ? (finalDate - initialDate) / 86400000 >= 30
          ? (finalDate - initialDate) / 86400000 -
            27 -
            30 * (promptMonth - 1) -
            Math.ceil((2 * promptMonth) / 4)
          : (finalDate - initialDate) / 86400000
        : (finalDate - initialDate) / 86400000 >= 30
        ? (finalDate - initialDate) / 86400000 -
          30 * promptMonth -
          Math.ceil((2 * promptMonth) / 4)
        : (finalDate - initialDate) / 86400000;
    return (
      <Main>
        {width <= 768 ? (
          <SubDivB>
            <div>
              <p>Quantidade de Anuncios</p>
              <h1>Nº de Anuncios</h1>
              <hr />
              <p>Tempo de Vinculação</p>
              <h1>TEMPO</h1>
            </div>
            <div>
              <p>Total a pagar</p>
              <h1>{paymentValue}</h1>
            </div>
            <PaypalBtn amount={paymentValue} />
          </SubDivB>
        ) : (
          <>
            <Div>
              <SubDivA>
                <img src={Cartao} alt="Cartão" />
                <p>
                  Informações <br /> de pagamento
                </p>
              </SubDivA>
              <SubDivB>
                <div>
                  <p>Quantidade de Anuncios</p>
                  <h1>Nº de Anuncios</h1>
                  <hr />
                  <p>Tempo de Vinculação</p>
                  <h1>
                    {promptMonth < 1 || isNaN(promptDay) === true
                      ? null
                      : promptMonth + " Meses e "}
                    {promptDay < 0 || isNaN(promptDay) === true
                      ? "Este não é um prazo valido"
                      : promptDay + " Dias"}
                  </h1>
                </div>
                <div>
                  <p>Total a pagar</p>
                  <h1>R${paymentValue}</h1>
                </div>
              </SubDivB>
            </Div>
            <PaypalBtn amount={paymentValue} />
          </>
        )}
      </Main>
    );
  }
}

Pagamento.contextType = Context;

export default Pagamento;
