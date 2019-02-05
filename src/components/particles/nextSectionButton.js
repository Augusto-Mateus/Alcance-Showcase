import React, { Component } from "react";
import styled from "styled-components";

const StyledNextSectionButton = styled.a`
  background-color: transparent;
  border: solid #fff 2px;
  border-radius: 40px;
  color: #fff;
  font-size: 40px;
  padding: 5px 17px 5px 17px;
  text-decoration-line: none;
`;

class NextSectionButton extends Component {
  render() {
    return <StyledNextSectionButton href="#">v</StyledNextSectionButton>;
  }
}

export default NextSectionButton;
