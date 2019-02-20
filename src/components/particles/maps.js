import React, { Component } from "react";
import styled from "styled-components";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import Context from "../../context";

const Main = styled.div`
  align-items: flex-start;
  display: flex;
  height: 300px;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  width: 345px;
`;

const style = {
  borderRadius: "1vw",
  height: "380px",
  margin: "-30px 0 0 -60px",
  position: "relative",
  width: "445px"
};

class Maps extends Component {
  render() {
    return (
      <Main>
        <Map
          google={this.props.google}
          zoom={14}
          style={style}
          center={{
            lat: -23.5209583,
            lng: -46.7115207
          }}
        />
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Main>
    );
  }
}

Maps.contextType = Context;

export default GoogleApiWrapper({
  apiKey: "AIzaSyD2atUYInE6aLgfmXoJeaV11dTq2i3szAA"
})(Maps);
