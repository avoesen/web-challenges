import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const {data, error} = useSWR("/api/random-character", fetcher)

  if(error) {
    return <h1>error</h1>
  }
  if(!data) {
    return
  }
  return (
    <>
      <h1>{data.name}</h1> 
      <p>phone: {data.phone}</p>
      <p>age: {data.age}</p>
      <p>geohash {data.geohash}</p>
      <p>twitter: {data.twitter}</p>
    </>
  )
}
