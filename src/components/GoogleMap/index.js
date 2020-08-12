import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    const style = {
      width: "80%",
      height: "80%",
    };
    return (
      <>
        <div
          style={{
            position: "relative",
            height: "80vh",
          }}
        >
          <h3 className="textLeft">Map</h3>
          <Map
            google={this.props.google}
            zoom={15}
            style={style}
            initialCenter={{
              lat: 41.852,
              lng: -88.2913,
            }}
          >
            <Marker
              title={"Diamond Ceramics and Detailing"}
              name={"DCD"}
              position={{ lat: 41.852, lng: -88.2913 }}
            />
          </Map>
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyANg1e1opY88GfO0d4Mml0Ybw1EVWFF9H0",
})(MapContainer);
