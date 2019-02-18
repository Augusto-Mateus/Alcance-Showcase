import React, { Component } from "react";
import styled from "styled-components";

import Segmentacao from "./segmentacao";
import PublicoAlvo from "./publicoAlvo";
import Ranking from "./ranking";
import Duracao from "./duracaoDeCampanha";
import Pagamento from "./pagamento";
import Contas from "./contas";
import Context from "../../context";

const SubDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

class ToggleSection extends Component {
  render() {
    const { logged } = this.context;
    return (
      <>
        {!logged ? null : (
          <>
            <Segmentacao />
            <PublicoAlvo />
            <Ranking />
            <Duracao />
            <SubDiv>
              <Contas />
              <Pagamento />
            </SubDiv>
          </>
        )}
      </>
    );
  }
}

ToggleSection.contextType = Context;

export default ToggleSection;
