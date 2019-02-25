import React, { Component } from "react";
import styled from "styled-components";

import width from "../../config";

const Main = styled.div`
  align-self: center;
  border-radius: 25px;
  height: ${width <= 768 ? "190px" : "320px"};
  width: ${width <= 768 ? "250px" : "400px"};
`;

class MapsApi extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD2atUYInE6aLgfmXoJeaV11dTq2i3szAA&callback=initMap"
      // AIzaSyD2atUYInE6aLgfmXoJeaV11dTq2i3szAA
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -23.5209642, lng: -46.7466352 },
      zoom: 13,
      disableDefaultUI: true
    });
  };
  render() {
    return <Main title="Google Maps" id="map" />;
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default MapsApi;
