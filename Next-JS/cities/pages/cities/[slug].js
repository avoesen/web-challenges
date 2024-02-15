import {useRouter} from "next/router"; 
import Link from "next/link";
import { cities } from "@/lib/data";

export default function City() {
    const router = useRouter(); 
    const {slug} = router.query; 

    const city = cities.find((city) => city.slug === slug); 
    console.log(slug)

    return(
        <>
        <Link href="/cities">Back to Home</Link>
        <h1>{city.name}, {city.country}</h1>
        <h3>population: {city.population} people</h3>
        <p>{city.description}</p>
        </>
    )
}