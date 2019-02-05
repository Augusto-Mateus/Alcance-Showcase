import React, { Component } from "react";
import styled from "styled-components";

const StyledSection = styled.a`
  color: #fff;
  padding: 5px 15px 5px 15px;
  text-decoration-line: none;

  :focus {
    background-image: linear-gradient(to right, #00dfc5, #00dfc5, #069dc8);
    border-radius: 20px;
  }

  :hover {
    background-image: linear-gradient(to right, #00dfc5, #00dfc5, #069dc8);
    border-radius: 20px;
  }
`;

class Section extends Component {
  render() {
    return <StyledSection href="sample">{this.props.section}</StyledSection>;
  }
}

export default Section;
