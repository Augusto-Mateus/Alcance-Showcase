import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios-jsonp-pro";

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
    this.state = {};
    this.search = e => {
      const { value } = e.target;
      axios
        .jsonp(
          "https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
          { params: { key: key, input: value, inputtype: "textquery" } }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    };
  }
  render() {
    return <Main type="text" placeholder="Local" onChange={this.search} />;
  }
}

export default SearchInput;
