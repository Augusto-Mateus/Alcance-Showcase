import React, { Component } from "react";
import styled from "styled-components";
import { width, key } from "../../config";
import Context from "../../context";

const Main = styled.div`
  align-self: center;
  border-radius: 15px;
  overflow: hidden;
`;

class MapsApi extends Component {
  render() {
    const Localização = this.context;
    const localização =
      Localização === ""
        ? "R.+Sacadura+Cabral+248+Lapa+São+Paulo+SP"
        : Localização;
    const url =
      "https://www.google.com/maps/embed/v1/search?q=" +
      localização +
      "&key=" +
      key;
    return (
      <Main>
        <iframe
          width={width <= 768 ? "250px" : "400px"}
          height={width <= 768 ? "190px" : "370px"}
          frameBorder="0"
          src={url}
          title="Maps"
          allowFullScreen
        />
      </Main>
    );
  }
}

MapsApi.contextType = Context;

export default MapsApi;
