import React, { Component } from "react";
import styled from "styled-components";

const StyledSection = styled.a`
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 5px 0px 5px 0px;
  text-decoration-line: none;
  transition: 0.5s ease;

  :focus {
    background-image: linear-gradient(to right, #00dfc5, #00dfc5, #069dc8);
    padding: 5px 15px 5px 15px;
  }

  :hover {
    background-image: linear-gradient(to right, #00dfc5, #00dfc5, #069dc8);
    padding: 5px 15px 5px 15px;
  }
`;

class Section extends Component {
  render() {
    return <StyledSection href="#">{this.props.section}</StyledSection>;
  }
}

export default Section;
