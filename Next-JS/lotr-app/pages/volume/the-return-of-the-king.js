import { volumes } from "../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function theReturnOfTheKing() {
  const volume1 = volumes.find(({ slug }) => slug === "the-return-of-the-king");
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
      <Link href="/volume/the-two-towers">prev page</Link>
    </>
  );
}
