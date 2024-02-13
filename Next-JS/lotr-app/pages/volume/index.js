import { introduction, volumes } from "../lib/data";
import Link from "next/link"
import { useRouter } from "next/router";

export default function LordOfTheRings() {
     const router = useRouter(); 
    

    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    function handleRandomVolume() {
        const randomVolume = getRandomElement(volumes)
        router.push(`/volume/${randomVolume.slug}`)
    }
  
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volume/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>random Volume</button>
    </>
  );}
