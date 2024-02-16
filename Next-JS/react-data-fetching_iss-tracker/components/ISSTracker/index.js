import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ISSTracker() {
  const { data: coords, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  if(error) {
    return <h1>failed</h1>
  }
  if(isLoading) {
    return <h1>...is loading</h1>
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
