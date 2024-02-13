import Link from "next/link"
export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ul>
        <li>
          <Link href="/volume/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volume/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volume/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul>
    </div>
  );
}
