import React, { Component } from "react";

import Segmentacao from "./segmentacao";
import PublicoAlvo from "./publicoAlvo";
import Ranking from "./ranking";
import Duracao from "./duracaoDeCampanha";
import Pagamento from "./pagamento";
import Contas from "./contas";
import Context from "../../context";

class ToggleSection extends Component {
  render() {
    const { logged } = this.context;
    return (
      <>
        {logged ? null : (
          <>
            <Segmentacao />
            <PublicoAlvo />
            <Ranking />
            <Duracao />
            <Pagamento />
            <Contas />
          </>
        )}
      </>
    );
  }
}

ToggleSection.contextType = Context;

export default ToggleSection;
