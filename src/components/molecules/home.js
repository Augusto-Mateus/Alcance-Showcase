import React, { Component } from "react";
import styled from "styled-components";

import Login from "../atoms/login";

const StyledHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class Home extends Component {
  render() {
    return (
      <StyledHome>
        <div>
          <img alt="Logo" />
          <h1>
            Uma nova maneira <br /> de alcançar.
          </h1>
        </div>
        <Login />
      </StyledHome>
    );
  }
}

export default Home;
