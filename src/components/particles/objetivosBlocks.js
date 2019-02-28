import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  align-items: center;
  background-image: url(${props => props.color});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  color: #fff;
  display: flex;
  filter: ${props => props.filter};
  height: 9vw;
  justify-content: space-between;
  margin: 0.5%;
  padding-left: 5vw;
  transition: 0.3s ease;
  width: 33%;
  h4 {
    font-size: 2vw;
    pointer-events: none;
  }
  img {
    height: 10vw;
    pointer-events: none;
  }
`;

class ObjetivosBlocks extends Component {
  render() {
    return (
      <Main
        color={this.props.colors}
        onClick={this.props.execute}
        check={this.props.state}
        id={this.props.master}
        filter={
          this.props.master === this.props.state ? "opacity(70%)" : "none"
        }
      >
        <h4>{this.props.master}</h4>
        <img src={this.props.img} alt="Imagem" />
      </Main>
    );
  }
}
export default ObjetivosBlocks;
