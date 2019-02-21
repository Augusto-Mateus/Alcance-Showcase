import React, { Component } from "react";
import styled from "styled-components";
import { withScriptjs, StandaloneSearchBox } from "react-google-maps";
import { compose, withProps } from "recompose";

const Main = styled.input`
  background-color: rgba(0, 0, 0, 0);
  border: solid #fff 1px;
  border-radius: 100px;
  color: #fff;
  height: 25px;
  text-indent: 10px;
  input::placeholder {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
  }
`;

const SearchBoxCreator = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />
  }),
  withScriptjs
)(props => (
  <div data-standalone-searchbox="">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <Main type="text" placeholder="Localização" />
    </StandaloneSearchBox>
    <ol>
      {props.places.map(
        ({ place_id, formatted_address, geometry: { location } }) => (
          <li key={place_id}>
            {formatted_address}
            {" at "}({location.lat()}, {location.lng()})
          </li>
        )
      )}
    </ol>
  </div>
));

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const refs = {};
    this.setState({
      places: [],
      onSearchBoxMounted: ref => {
        refs.SearchBox = ref;
      },
      onPlacesChanged: () => {
        const places = refs.searchBox.getPlaces();

        this.setState({
          places
        });
      }
    });
  }
  render() {
    return <SearchBoxCreator />;
  }
}

export default SearchInput;
