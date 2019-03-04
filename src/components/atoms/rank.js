import React, { Component } from "react";
import styled from "styled-components";

import Context from "../../context";
import Ranked from "../particles/ranked";
import width from "../../config";

const rankeds = [0, 1, 2, 1];

const title = ["Title1", "Title2", "Title3", "Title4"];

const Main = styled.div`
  background-image: linear-gradient(to bottom, #f4d8dc, white);
  border-radius: 50px;
  height: 500px;
  padding: 0px 13px 0px 13px;
  overflow: hidden;
  width: ${width <= 768 ? "300px" : "500px"};
  &:after {
  }
`;

const Scroller = styled.form`
  border-radius: 50px;
  height: 100%;
  margin-right: -5px;
  ${width <= 768 ? "overflow-x: hidden;" : "overflow-y: scroll;"}
  padding: 13px 0 13px 0;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-button {
    height: 30px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 7px;
    &:hover {
      background: #888;
    }
  }
`;

class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.check = e => {
      const { id } = e.target;
      this.setState({ id });
      console.log(this.context);
    };
  }

  render() {
    const { checked } = this.state;
    return (
      <Main>
        <Scroller>
          {title.map(titles => {
            return (
              <div key={titles}>
                <Ranked
                  event={this.check}
                  img={rankeds[title.indexOf(titles)]}
                  checked={checked}
                  info={titles}
                />
              </div>
            );
          })}
        </Scroller>
      </Main>
    );
  }
}

Rank.contextType = Context;

export default Rank;
