import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const router = useRouter()
  
  const id = router.query.id;
  const { data, error, isLoading } = useSWR(`https://swapi.dev/api/people/${id}`, fetcher);
  if (error) {
    return <h1>error</h1>
  }
  if (isLoading) {
    return <h1>..is loading</h1>
  }

  const {name, height, eye_color: eyeColor, birth_year: birthYear} = data
  
  return (
    <Layout>
      <Card
        id={id}
        name={name}
        height={height}
        eyeColor={eyeColor}
        birthYear={birthYear}
      />
    </Layout>
  );
}
