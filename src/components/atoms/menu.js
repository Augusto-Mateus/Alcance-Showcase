import React, { Component } from "react";
import styled from "styled-components";

import Section from "../particles/section";

const sections = [
  "HOME",
  "SEGMENTAÇÃO",
  "PÚBLICO ALVO",
  "RANKING",
  "DURAÇÃO DE CAMPANHA",
  "PAGAMENTO",
  "CONTAS"
];

const scroll = ["0, 0", "0, 935"];

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 130px;
  padding: 0;
  width: 100%;
`;

class Menu extends Component {
  render() {
    return (
      <Main>
        {sections.map(section => {
          return (
            <Section
              scroll={scroll[sections.indexOf(section)]}
              section={section}
              key={section}
            />
          );
        })}
      </Main>
    );
  }
}

export default Menu;
