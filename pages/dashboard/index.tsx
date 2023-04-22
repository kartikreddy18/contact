import type { Country, Historical, Today } from "@/types/today";
import type { GetServerSideProps } from "next/types";
import { CardContainer } from "@/components/card";
import { LineChart, Map } from "@/components/dashboard";
import type { Marker, Popup, TileLayer } from "react-leaflet";
import Head from "next/head";

const DEFAULT_CENTER: any = [38.907132, -77.036546];

interface Props {
  TileLayer: typeof TileLayer;
  Marker: typeof Marker;
  Popup: typeof Popup;
}

export default function Dashboard({
  data,
  lineData,
  country,
}: {
  data: Today;
  lineData: Historical;
  country: Country[];
}) {
  return (
    <>
      <Head>
        <title>Covid-19 Dashboard</title>
      </Head>
      <div className="p-10">
        <CardContainer data={data} />
        <div>
          <LineChart data={lineData} />
        </div>
        <Map
          className={"w-full h-full"}
          width="800"
          height="400"
          center={DEFAULT_CENTER}
          zoom={12}
        >
          {({ TileLayer, Marker, Popup }: Props) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {country.map((value, index) => {
                return (
                  <Marker
                    key={index}
                    position={[value.countryInfo.lat, value.countryInfo.long]}
                  >
                    <Popup>
                      {value.country}
                      <br />
                      <>
                        <p>Active: {value.active}</p>
                        <p>Recovered: {value.recovered}</p>
                        <p>Deaths: {value.deaths}</p>
                      </>
                    </Popup>
                  </Marker>
                );
              })}
              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </>
          )}
        </Map>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  const resCard = await fetch("https://disease.sh/v3/covid-19/all");
  const res = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  const countryRes = await fetch("https://disease.sh/v3/covid-19/countries");
  const data: Today = await resCard.json();
  const lineData: Historical = await res.json();
  const country = await countryRes.json();
  return {
    props: {
      data,
      lineData,
      country,
    },
  };
}
