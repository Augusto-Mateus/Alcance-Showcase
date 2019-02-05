import React, { Component } from "react";

import Home from "./components/molecules/home";
import Menu from "./components/atoms/menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <br />
        <br />
        <br />
        <Home />
      </div>
    );
  }
}

export default App;
