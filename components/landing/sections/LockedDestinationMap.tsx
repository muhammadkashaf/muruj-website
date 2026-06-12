"use client";

import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const skarduCenter: [number, number] = [35.2971, 75.6333];

type DestinationLocation = {
  label: string;
  position: [number, number];
  tone: string;
  optionalLabel?: boolean;
};

const locations: DestinationLocation[] = [
  { label: "Skardu City", position: [35.2971, 75.6333] as [number, number], tone: "var(--forest)" },
  { label: "Shangrila", position: [35.4288, 75.4534] as [number, number], tone: "var(--map-marker-blue)" },
  { label: "Deosai", position: [35.238, 75.776] as [number, number], tone: "var(--map-marker-orange)", optionalLabel: true },
  { label: "Fuel Stop", position: [35.2678, 75.5785] as [number, number], tone: "var(--map-marker-sage)" },
];

function locationIcon(label: string, tone: string, optionalLabel?: boolean) {
  return L.divIcon({
    className: `destination-map-marker${optionalLabel ? " destination-map-marker--optional-label" : ""}`,
    html: `
      <span class="destination-map-marker__pin" style="--marker-tone:${tone}">
        <span class="destination-map-marker__dot"></span>
      </span>
      <span class="destination-map-marker__label">${label}</span>
    `,
    iconAnchor: [17, 17],
  });
}

const selectedLocationIcon = L.divIcon({
  className: "destination-map-marker destination-map-marker--active",
  html: `
    <span class="destination-map-marker__pulse"></span>
    <span class="destination-map-marker__pin" style="--marker-tone:var(--action)">
      <span class="destination-map-marker__camera"></span>
    </span>
    <span class="destination-map-marker__label destination-map-marker__label--active">Sheosar Lake</span>
  `,
  iconAnchor: [21, 21],
});

export default function LockedDestinationMap() {
  return (
    <MapContainer
      center={skarduCenter}
      zoom={10}
      minZoom={10}
      maxZoom={10}
      dragging={false}
      scrollWheelZoom={false}
      touchZoom={false}
      doubleClickZoom={false}
      boxZoom={false}
      keyboard={false}
      zoomControl={false}
      attributionControl
      preferCanvas
      className="destination-leaflet-map absolute inset-0 z-0 h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a class="cursor-pointer" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location) => (
        <Marker
          key={location.label}
          position={location.position}
          icon={locationIcon(location.label, location.tone, location.optionalLabel)}
          interactive={false}
          keyboard={false}
        />
      ))}

      <Marker
        position={[35.2075, 75.5336]}
        icon={selectedLocationIcon}
        interactive={false}
        keyboard={false}
        zIndexOffset={100}
      />
    </MapContainer>
  );
}
