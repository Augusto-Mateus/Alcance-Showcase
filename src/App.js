import React, { Component } from "react";
import styled from "styled-components";

import Home from "./components/molecules/home";
import Menu from "./components/atoms/menu";
import Segmentacao from "./components/molecules/segmentacao";
import PublicoAlvo from "./components/molecules/publicoAlvo";

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
      </LandingPage>
    );
  }
}

export default App;
