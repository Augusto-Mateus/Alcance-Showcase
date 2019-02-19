import React, { Component } from "react";
import styled from "styled-components";

import Contas from "./contas";
import Duracao from "./duracaoDeCampanha";
import Context from "../../context";
import NextSectionButton from "../particles/nextSectionButton";
import Pagamento from "./pagamento";
import PublicoAlvo from "./publicoAlvo";
import Ranking from "./ranking";
import Segmentacao from "./segmentacao";

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubDivReverse = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

class ToggleSection extends Component {
  render() {
    const { logged } = this.context;
    return (
      <>
        {!logged ? null : (
          <Main>
            <Segmentacao />
            <SubDivReverse>
              <PublicoAlvo />
              <NextSectionButton scroll="935, 1600" />
            </SubDivReverse>
            <SubDivReverse>
              <Ranking />
              <NextSectionButton />
            </SubDivReverse>
            <SubDivReverse>
              <Duracao />
              <NextSectionButton />
            </SubDivReverse>
            <SubDivReverse>
              <Contas />
              <SubDiv>
                <Pagamento />
                <NextSectionButton />
              </SubDiv>
              <NextSectionButton />
            </SubDivReverse>
          </Main>
        )}
      </>
    );
  }
}

ToggleSection.contextType = Context;

export default ToggleSection;
