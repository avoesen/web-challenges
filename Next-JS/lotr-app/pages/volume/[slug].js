import { volumes } from "../lib/data";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router"

export default function VolumeDetail() {
    const router = useRouter(); 
    // const {slug} = router.query; 

    const volume = volumes.findIndex(({slug}) => slug === router.query.slug);
    console.log(volume)

    if (!volume) {
        return <p>page not found</p>
    }
  const index = volumes.indexOf(volume);

  const prevPage = volumes[index - 1];
  const nextPage = volumes[index + 1];

  return (
    <>
      <Link href="/volume">Back to main</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <Image
        src={volume.cover}
        height={230}
        width={144}
        alt={volume.slug}
      ></Image>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      {prevPage && <Link href={`/volume/${prevPage.slug}`}>prev page</Link>}
      {nextPage && <Link href={`/volume/${nextPage.slug}`}>next page</Link>}
    </>
  );
}
