import React, { Component } from "react";
import styled from "styled-components";

//backgrounds
import Objetivos from "../../static/Objetivos.png";
import orange from "../../static/orange.png";
import rose from "../../static/rose.png";
import yellow from "../../static/yellow.png";
import cyan from "../../static/cyan.png";
import blue from "../../static/blue.png";
import purple from "../../static/purple.png";
//images
import danger from "../../static/danger.png";
import envelope from "../../static/envelope.png";
import fireworks from "../../static/fireworks.png";
import mountain from "../../static/mountain.png";
import promotion from "../../static/promotion.png";
import thunder from "../../static/thunder.png";

const Main = styled.div`
  align-items: center;
  background-image: url(${Objetivos});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #2d29d2;
  display: flex;
  flex-direction: column;
  height: 750px;
  justify-content: space-evenly;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 460px;
  justify-content: center;
  width: 100%;
`;

const Btn = styled.button`
  align-items: center;
  background-image: url(${props => props.color});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: 20px;
  color: #fff;
  display: flex;
  filter: ${props => props.toggle};
  height: 10vw;
  justify-content: space-between;
  margin: 0.5%;
  padding-left: 5vw;
  transition: 0.3s ease;
  width: 40%;
  h4 {
    font-size: 2vw;
    pointer-events: none;
  }
  img {
    height: 10vw;
    pointer-events: none;
  }
`;

const colors = [cyan, blue, rose, purple, orange, yellow];

const objetivos = [
  "Impulsionar uma publicação",
  "Receber mensagem",
  "Gerar trafego para seu site",
  "Promover sua página",
  "Aumentar meu alcance",
  "Promover um evento"
];

const imgs = [danger, envelope, fireworks, mountain, promotion, thunder];

class Objetivo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Impulsionar: false,
      Receber: false,
      Gerar: false,
      Página: false,
      Aumentar: false,
      Evento: false
    };

    // .click()

    this.select = e => {
      const { id } = e.target;
      id === "Impulsionar uma publicação" &&
        this.setState(prevState => ({ Impulsionar: !prevState.Impulsionar }));
      id === "Receber mensagem" &&
        this.setState(prevState => ({ Receber: !prevState.Receber }));
      id === "Gerar trafego para seu site" &&
        this.setState(prevState => ({ Gerar: !prevState.Gerar }));
      id === "Promover sua página" &&
        this.setState(prevState => ({ Página: !prevState.Página }));
      id === "Aumentar meu alcance" &&
        this.setState(prevState => ({ Aumentar: !prevState.Aumentar }));
      id === "Promover um evento" &&
        this.setState(prevState => ({ Evento: !prevState.Evento }));
      console.log(
        this.state.Impulsionar,
        this.state.Receber,
        this.state.Gerar,
        this.state.Página,
        this.state.Aumentar,
        this.state.Evento
      );
    };
  }

  componentDidMount() {
    console.log(
      this.state.Impulsionar,
      this.state.Receber,
      this.state.Gerar,
      this.state.Página,
      this.state.Aumentar,
      this.state.Evento
    );
  }

  render() {
    const {
      Impulsionar,
      Receber,
      Gerar,
      Página,
      Aumentar,
      Evento
    } = this.state;
    const states = [Impulsionar, Receber, Gerar, Página, Aumentar, Evento];
    return (
      <Main>
        <h1>
          Qual é o seu objetivo
          <br /> para essa campanha?
        </h1>
        <Div>
          {objetivos.map(objetivo => {
            return (
              <Btn
                key={objetivo}
                id={objetivo}
                color={colors[objetivos.indexOf(objetivo)]}
                onClick={this.select}
                toggle={
                  states[objetivos.indexOf(objetivo)] === true
                    ? "blur(1px) opacity(80%)"
                    : "none"
                }
              >
                <h4>{objetivo}</h4>
                <img src={imgs[objetivos.indexOf(objetivo)]} alt="Imagem" />
              </Btn>
            );
          })}
        </Div>
      </Main>
    );
  }
}

export default Objetivo;
