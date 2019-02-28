import React, { Component } from "react";
import styled from "styled-components";

import ObjetivosBlocks from "../particles/objetivosBlocks";

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
  padding-top: 100px;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 33vw;
  justify-content: center;
  width: 100%;
`;

const objetivos = [
  "Impulsionar uma publicação",
  "Receber mensagem",
  "Gerar trafego para seu site",
  "Promover sua página",
  "Aumentar meu alcance",
  "Promover um evento"
];

const colors = [cyan, blue, rose, purple, orange, yellow];

const imgs = [danger, envelope, fireworks, mountain, promotion, thunder];

class Objetivo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: ""
    };

    this.check = e => {
      const { id } = e.target;
      this.setState({ check: id });
      window.scrollTo(0, 1570);
    };
  }
  render() {
    return (
      <Main>
        <h1>
          Qual é o seu objetivo
          <br /> para essa campanha?
        </h1>
        <Div>
          {objetivos.map(objetivo => {
            return (
              <ObjetivosBlocks
                execute={this.check}
                state={this.state.check}
                key={objetivo}
                master={objetivo}
                colors={colors[objetivos.indexOf(objetivo)]}
                img={imgs[objetivos.indexOf(objetivo)]}
              />
            );
          })}
        </Div>
      </Main>
    );
  }
}

export default Objetivo;
