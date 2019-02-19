import React, { Component } from "react";
import styled from "styled-components";

import Ranked from "../particles/ranked";

const rankeds = [0, 1, 2, 1];

const Main = styled.div`
  background-color: #f4d8dc;
  border-radius: 50px;
  height: 500px;
  padding: 13px;
  overflow-y: hidden;
  width: 500px;
`;

class Rank extends Component {
  render() {
    return (
      <Main>
        {rankeds.map(ranked => {
          return <Ranked key={Math.random()} img={ranked} />;
        })}
      </Main>
    );
  }
}

export default Rank;
