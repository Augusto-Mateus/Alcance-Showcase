import React, { Component } from "react";
import styled from "styled-components";

import Contas from "./contas";
import Context from "../../context";
import Duracao from "./duracaoDeCampanha";
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
              <NextSectionButton scroll={1570} />
            </SubDivReverse>
            <SubDivReverse>
              <Ranking />
              <NextSectionButton scroll={2325} />
            </SubDivReverse>
            <SubDivReverse>
              <Duracao />
              <NextSectionButton scroll={3050} />
            </SubDivReverse>
            <SubDivReverse>
              <Contas />
              <SubDiv>
                <Pagamento />
                <NextSectionButton scroll={4600} />
              </SubDiv>
              <NextSectionButton scroll={3850} />
            </SubDivReverse>
          </Main>
        )}
      </>
    );
  }
}

ToggleSection.contextType = Context;

export default ToggleSection;
