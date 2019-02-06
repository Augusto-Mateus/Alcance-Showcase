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

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
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
