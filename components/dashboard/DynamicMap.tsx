import { ReactNode, useEffect } from "react";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { MapContainer } = ReactLeaflet;

interface Props {
  children: (ReactLeaflet: any, Leaflet: any) => ReactNode;
  className: string;
  width: number | string;
  height: number | string;
}

const Map = ({ children, className, width, height, ...rest }: Props) => {
  useEffect(() => {
    (async function init() {
      // delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "/marker-icon-2x.png",
        iconUrl: "/marker-icon.png",
        shadowUrl: "/marker-shadow.png",
      });
    })();
  }, []);

  return (
    <MapContainer className={className} {...rest}>
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  );
};

export default Map;
