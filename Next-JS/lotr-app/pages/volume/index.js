import { introduction } from "../lib/data";
import Link from "next/link"
// import { volumes } from "../lib/data";

export default function LordOfTheRings() {
  
  return (
    <>
        <h1>Lord of the Rings</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <ul>
            <li>
                <Link href="/volume/the-fellowship-of-the-ring">The Fellowship of the Ring</Link>
            </li>
            <li>
                <Link href="/volume/the-two-towers">The Two Towers</Link>
            </li>
            <li>
                <Link href="/volume/the-return-of-the-king">The Return of the King</Link>
            </li>
        </ul>
    </>
)}
