import React, { Component } from "react";
import styled from "styled-components";

import Home from "./components/molecules/home";
import Menu from "./components/atoms/menu";
import Segmentacao from "./components/molecules/segmentacao";
import PublicoAlvo from "./components/molecules/publicoAlvo";
import Ranking from "./components/molecules/ranking";
import DuracaoDeCampanha from "./components/molecules/duracaoDeCampanha";
import Pagamento from "./components/molecules/pagamento";

const LandingPage = styled.div`
  padding: 40px 160px 40px 160px;
`;

class App extends Component {
  render() {
    return (
      <LandingPage className="App">
        <Menu />
        <Home />
        <Segmentacao />
        <PublicoAlvo />
        <Ranking />
        <DuracaoDeCampanha />
        <Pagamento />
      </LandingPage>
    );
  }
}

export default App;
