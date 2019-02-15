import React, { Component } from "react";
import styled from "styled-components";

const StyledMaps = styled.div`
  border-radius: 25px;
  height: 320px;
  width: 400px;
`;

class Maps extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=#&callback=initMap"
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
    // //search
    // const request = {
    //   query: "Museum of Contemporary Art Australia",
    //   fields: ["name", "geometry"]
    // };
    // //service
    // const service = new window.google.maps.places.PlacesService(map);
    // //search function
    // service.findPlaceFromQuery(request, (results, status) => {
    //   if (status === window.google.maps.places.PlacesServiceStatus.OK) {
    //     for (var i = 0; i < results.length; i++) {
    //       createMarker(results[i]);
    //     }

    //     map.setCenter(results[0].geometry.location);
    //   }
    // });
    // //marker
    // const createMarker = place => {
    //   new window.google.maps.Marker({
    //     map: map,
    //     position: place.geometry.location
    //   });
    // };
  };
  render() {
    return <StyledMaps title="Google Maps" id="map" />;
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

export default Maps;
