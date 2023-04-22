import { Today } from "@/types/today";

export const CardContainer = ({ data }: { data: Today }) => {
  return (
    <div className="flex overflow-x-scroll scrollbar-hide gap-5">
      <Card
        data={{
          cases: data.cases,
          todayCases: data.todayCases,
          casesPerOneMillion: data.casesPerOneMillion,
          oneCasePerPeople: data.oneCasePerPeople,
        }}
      />
      <Card
        data={{
          deaths: data.deaths,
          todayDeaths: data.todayDeaths,
          deathsPerOneMillion: data.deathsPerOneMillion,
          oneDeathPerPeople: data.oneDeathPerPeople,
        }}
      />
      <Card
        data={{
          recovered: data.recovered,
          todayRecovered: data.todayRecovered,
          recoveredPerOneMillion: data.recoveredPerOneMillion,
        }}
      />
      <Card
        data={{
          active: data.active,
          critical: data.critical,
          activePerOneMillion: data.activePerOneMillion,
          criticalPerOneMillion: data.criticalPerOneMillion,
          affectedCountries: data.affectedCountries,
        }}
      />
    </div>
  );
};

export const Card = ({ data }: { data: any }) => {
  return (
    <div className="max-w-max h-auto p-5 bg-gray-950 shadow border border-black rounded ">
      <ul>
        {Object.keys(data).map((value, index) => (
          <li key={index} className="font-medium text-white flex space-x-2">
            <h1 className="capitalize">{value}:</h1>
            <p className="font-normal">{data[value]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
