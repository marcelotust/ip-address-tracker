import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { useState } from 'react';

interface Props {
  position : String[];
}

const Map = (props : Props) => {
  
  const StyledContainer = styled.div`
    height: calc(100vh - 205px);
    width: 100%;
    left: 0px;
    top: 250px;
    overflow: absolute;
    position: fixed;
    z-index: -2;
  `;

  return (
    <StyledContainer>
      <MapContainer
        center={props.position}
        zoom={7}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={props.position}
          draggable={false}
          animate={false}
        ></Marker>
      </MapContainer>
    </StyledContainer>
  );
};

export default Map;
