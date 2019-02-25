import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { key } from "../../config";

const Main = styled.input`
  border: solid 0.5px #fff;
  border-radius: 100vw;
  height: 25px;
  width: 100%;
`;

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.getPlaces = () => {
      const query = this.state.query;
      axios
        .get("https://maps.googleapis.com/maps/api/place/textsearch/json", {
          params: { query, key: key }
        })
        .then(res => {
          const { candidates } = res.data;
          console.log(candidates);
        })
        .catch(err => console.log(err));
    };
    this.handleLocation = event => {
      const { value } = event.target;
      this.setState({ query: value });
      this.getPlaces();
    };
  }
  render() {
    return <Main placeholder="Localização" onChange={this.handleLocation} />;
  }
}

export default SearchInput;
