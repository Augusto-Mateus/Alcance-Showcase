import React, { Component } from "react";
import styled from "styled-components";

import Cartao from "../../static/cartão.png";
import Paypal from "../../static/Paypal.png";
import NextSectionButton from "../particles/nextSectionButton";

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PaypalButton = styled.button`
  border: none;
  border-radius: 100px;
  height: 0px;
  width: 0px;
  img {
    height: 60px;
    margin-top: -20px;
    margin-left: -50px;
  }
`;

class Pagamento extends Component {
  render() {
    return (
      <Main>
        <div>
          <div>
            <img src={Cartao} alt="Cartão" />
            <p>Informações de pagamento</p>
          </div>
          <div>
            <div>
              <p>Quantidade de Anuncios</p>
              <p>Nº de Anuncios</p>
              <hr />
              <p>Tempo de Vinculação</p>
              <p>TEMPO</p>
            </div>
            <div>
              <p>Total a pagar</p>
              <p>TOTAL</p>
            </div>
          </div>
        </div>
        <PaypalButton>
          <img src={Paypal} alt="Paypal" />
        </PaypalButton>
        <NextSectionButton />
      </Main>
    );
  }
}

export default Pagamento;
