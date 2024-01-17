import React, { FC, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customIconUrl from './images/location.png';


interface IProps {
  start?: number;
  end?: number;
}

interface ISetViewOnClickProps {
  coords: [number, number];
}

interface IIcon {
  iconUrl: any;
  iconRetinaUrl: any;
  shadowUrl: any;
  iconSize: [number, number];
  iconAnchor: [number, number];
  popupAnchor: [number, number];
  shadowSize: [number, number];
}

const icon = new L.Icon<IIcon>({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const SetViewOnClick: FC<ISetViewOnClickProps> = ({ coords }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(coords, map.getZoom());
    map.invalidateSize();
  }, [coords, map]);

  return null;
};

const Map: FC<IProps> = ({
  start = 35.69982561193772,
  end = 51.33775776963473,
}) => {
  const position: [number, number] = [start, end];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="!h-80 !w-full"
      dragging={false}
      touchZoom={false}
      doubleClickZoom={false}
    >
      <TileLayer
        attribution='© <a href="https://drmeet.ir">DrMeet</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        {/* <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
      </Marker>
      <SetViewOnClick coords={position} />
    </MapContainer>
  );
};

export default Map;