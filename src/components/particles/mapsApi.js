import React, { Component } from "react";
import styled from "styled-components";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";
import Context from "../../context";

const Wrapper = styled.div`
  height: 400px;
  margin: 0;
  width: 400px;
`;

const Map = styled.div`
  border-radius: 25px;
  height: 400px;
  width: 400px;
`;

const Maps = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <Wrapper />,
    mapElement: <Map style={{ margin: `0 0 -100px 0` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: -23.5209643, lng: -46.7114534 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: -23.5209643, lng: -46.7114534 }} />
    )}
  </GoogleMap>
));

class MapsApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: false
    };
  }

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 300);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <Maps
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

Maps.contextType = Context;

export default MapsApi;

// key=AIzaSyD2atUYInE6aLgfmXoJeaV11dTq2i3szAA&
