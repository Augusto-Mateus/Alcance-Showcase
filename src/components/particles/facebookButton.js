import React, { Component } from "react";
import styled from "styled-components";

import Facebook from "../../static/facebook.png";

const StyledButton = styled.button`
  align-items: center;
  background-color: #2467b6;
  border: none;
  border-radius: 100px;
  color: #fff;
  display: flex;
  font-weight: bold;
  height: 45px;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  width: 80%;

  img {
    height: 20px;
    width: 20px;
  }
`;

class FacebookButton extends Component {
  render() {
    return (
      <StyledButton>
        <img src={Facebook} alt="Facebook Logo" />
        {this.props.name}
      </StyledButton>
    );
  }
}

export default FacebookButton;
