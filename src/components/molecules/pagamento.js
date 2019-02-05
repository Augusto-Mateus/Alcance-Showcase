import React, { Component } from "react";

class Pagamento extends Component {
  render() {
    return (
      <div>
        <div>
          <svg>SVG PAYMENT</svg>
          <p>Informações de pagamento</p>
        </div>
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
        <button>PayPal</button>
        <button>Next page!</button>
      </div>
    );
  }
}
