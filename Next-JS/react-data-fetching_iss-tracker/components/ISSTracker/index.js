import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ISSTracker() {
  const { data: coords, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  }); 
  // const coords = data

  if(error) {
    return <h1>failed</h1>
  }
  if(isLoading) {
    return <h1>...is loading</h1>
  }

  function handleReload() {
    mutate(); 
  }

//   const [coords, setCoords] = useState({
//     longitude: 0,
//     latitude: 0,
//   });

//   async function getISSCoords() {
//     try {
//       const response = await fetch(URL);
//       if (response.ok) {
//         const data = await response.json();
//         setCoords({ longitude: data.longitude, latitude: data.latitude });
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       getISSCoords();
//     }, 5000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => handleReload()}
      />
    </main>
  );
}