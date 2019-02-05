import React, { Component } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: solid #ccc 2px;
  border-radius: 80px;
  height: 40px;
  margin: 5px;
  padding-left: 20px;
  width: 75%;
`;

class Input extends Component {
  render() {
    return (
      <StyledInput
        placeholder={this.props.placeholder}
        type={this.props.type}
      />
    );
  }
}

export default Input;
