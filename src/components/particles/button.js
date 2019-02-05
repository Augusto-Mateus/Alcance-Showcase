import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-image: linear-gradient(to right, #00dfc5, #00dfc5, #069dc8);
  border: none;
  border-radius: 20px;
  color: #fff;
  height: 35px;
  margin: 5px;
  width: 50%;
`;

//height: ${this.props.height};

class Button extends Component {
  render() {
    return <StyledButton>{this.props.name}</StyledButton>;
  }
}

export default Button;
