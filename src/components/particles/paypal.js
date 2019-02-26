import React, { Component } from "react";
import styled from "styled-components";

import Paypal from "../../static/Paypal.png";
import width from "../../config";

const Btn = styled.form`
  border: none;
  border-radius: 100px;
  height: 0px;
  margin-left: ${width <= 768 ? "0" : "30vw"};
  margin-top: ${width <= 768 ? "0" : "40px"};
  width: 0px;
  input {
    height: 60px;
    margin-top: ${width <= 768 ? "0" : "-20px"};
    margin-left: ${width <= 768 ? "-120px" : "-50px"};
  }
`;

class PaypalBtn extends Component {
  render() {
    return (
      <Btn
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_xclick" />
        <input type="hidden" name="item_name" value="Botão Paypal" />
        <input type="hidden" name="business" value="m.asuheth@gmail.com" />
        <input type="hidden" name="lc" value="BR" />
        <input type="hidden" name="item_name" value="Botão Paypal" />
        <input type="hidden" name="button_subtype" value="services" />
        <input type="hidden" name="no_note" value="0" />
        <input type="hidden" name="currency_code" value="BRL" />
        <input
          type="hidden"
          name="bn"
          value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"
        />
        <input type="hidden" name="amount" value={this.props.amount} />
        <input
          name="submit"
          type="image"
          src={Paypal}
          alt="PayPal - A maneira fácil e segura de enviar pagamentos online!"
        />
      </Btn>
    );
  }
}

export default PaypalBtn;

// <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
// <input type="hidden" name="cmd" value="_xclick">
// <input type="hidden" name="business" value="m.asuheth@gmail.com">
// <input type="hidden" name="lc" value="BR">
// <input type="hidden" name="item_name" value="Botão Paypal">
// <input type="hidden" name="button_subtype" value="services">
// <input type="hidden" name="no_note" value="0">
// <input type="hidden" name="currency_code" value="BRL">
// <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
// <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - A maneira fácil e segura de enviar pagamentos online!">
// <img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1">
// </form>
