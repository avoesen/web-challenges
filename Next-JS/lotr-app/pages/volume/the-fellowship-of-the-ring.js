import { volumes } from "../lib/data";
import Link from "next/link"
import Image from "next/image";

export default function theFellowshipOfTheRing() {
    const volume1 = volumes.find(
     ({slug}) => slug === "the-fellowship-of-the-ring"
    );
    const index = volumes.indexOf(volume1);
     const prevPage = volumes[index - 1];
     const nextPage = volumes[index + 1];

    return (
      <>
        <Link href="/volume">Back to main</Link>
        <h1>{volume1.title}</h1>
        <p>{volume1.description}</p>
        <Image
          src={`/images/${volume1.slug}.png`}
          height={230}
          width={144}
          alt={`${volume1.slug}`}
        ></Image>
        <ul>
          {volume1.books.map((book) => (
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