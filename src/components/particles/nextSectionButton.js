import React, { Component } from "react";
import styled from "styled-components";

import Arrow from "../../static/Arrow.png";

const StyledNextSectionButton = styled.button`
  align-items: flex-end;
  background-color: rgba(100, 100, 100, 0.3);
  border: solid #fff 3px;
  border-radius: 100px;
  color: #fff;
  display: flex;
  font-size: 40px;
  height: 100px;
  justify-content: center;
  width: 100px;

  img {
    height: 65px;
    margin-top: 20px;
  }
`;

class NextSectionButton extends Component {
  render() {
    return (
      <StyledNextSectionButton href="#">
        <img alt="arrow" src={Arrow} />
      </StyledNextSectionButton>
    );
  }
}

export default NextSectionButton;
