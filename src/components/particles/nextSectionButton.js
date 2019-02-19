import React, { Component } from "react";
import styled from "styled-components";

import Arrow from "../../static/Arrow.png";

const Btn = styled.button`
  align-items: flex-end;
  align-self: center;
  background-color: rgba(100, 100, 100, 0.3);
  border: solid #fff 3px;
  border-radius: 100px;
  color: #fff;
  display: flex;
  font-size: 40px;
  height: 100px;
  justify-content: center;
  margin: -50px 0 -50px 0;
  width: 100px;

  img {
    height: 65px;
    margin-top: 20px;
  }
`;

class NextSectionButton extends Component {
  constructor(props) {
    super(props);
    this.scroll = () => {
      window.scrollTo(0, this.props.scroll);
    };
  }
  render() {
    return (
      <Btn onClick={this.scroll}>
        <img alt="arrow" src={Arrow} />
      </Btn>
    );
  }
}

export default NextSectionButton;
