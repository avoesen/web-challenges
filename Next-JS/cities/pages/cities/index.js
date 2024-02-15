import { cities } from "@/lib/data";
import Link from "next/link";

console.log(cities)
export default function Cities() {
    return (
      <>
        <ul>
          {cities.map((city) => (
            <li key={city.id}>
              <Link href={`/cities/${city.slug}`}>{city.name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
}