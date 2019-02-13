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
  font-size: 17px;
  font-weight: bold;
  height: 47px;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  width: 80%;

  img {
    height: 27px;
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
