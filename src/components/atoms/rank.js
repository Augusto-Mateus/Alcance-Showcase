import React, { Component } from "react";
import styled from "styled-components";

import Ranked from "../particles/ranked";

const rankeds = ["1", "2", "3", "4", "5"];

const Main = styled.div`
  background-color: #f4d8dc;
  background-image: linear-gradient(
    to top,
    rgba(300, 300, 300, 0.6),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
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
          return <Ranked key={ranked} />;
        })}
      </Main>
    );
  }
}

export default Rank;
