import React, { Component } from "react";
import styled from "styled-components";

const StyledAgeRange = styled.div`
  align-items: center;
  display: flex;
  margin-top: 50px;

  hr {
    background-color: #626262;
    border: none;
    height: 25px;
    margin: 20px;
    transform: rotate(90deg);
    width: 10px;
  }
`;

const StyledRange = styled.div`
  align-items: center;
  background: linear-gradient(to right, #fa7778, #fdb851);
  border-radius: 100px;
  display: flex;
  height: 150px;
  justify-content: center;
  padding: 0;
  width: 150px;

  div {
    align-items: center;
    background-color: #eaeaea;
    border-radius: 100px;
    display: flex;
    height: 144px;
    justify-content: center;
    margin: 0;
    width: 144px;

    p {
      color: #fa7778;
      font-size: 75px;
    }
  }
`;

class AgeRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minAge: 17,
      maxAge: 25
    };
  }
  render() {
    return (
      <StyledAgeRange>
        <StyledRange>
          <div>
            <p>{this.state.minAge}</p>
          </div>
        </StyledRange>
        <hr />
        <StyledRange>
          <div>
            <p>{this.state.maxAge}</p>
          </div>
        </StyledRange>
      </StyledAgeRange>
    );
  }
}

export default AgeRange;
