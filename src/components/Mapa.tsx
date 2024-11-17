import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = ({ lat, lon }: { lat: number; lon: number }) => {
  const position: [number, number] = [lat, lon];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{
        height: "280px",
        width: "100%",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>This is the position</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
