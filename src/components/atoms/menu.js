import React, { Component } from "react";
import styled from "styled-components";

import Section from "../particles/section";

const sections = [
  "Home",
  "Segmentação",
  "Publico Alvo",
  "Ranking",
  "Duração de Campanha",
  "Pagamento",
  "Contas"
];

const StyledMenu = styled.menu`
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
`;

class Menu extends Component {
  render() {
    return (
      <StyledMenu>
        {sections.map(section => {
          return <Section section={section} key={section} />;
        })}
      </StyledMenu>
    );
  }
}

export default Menu;
