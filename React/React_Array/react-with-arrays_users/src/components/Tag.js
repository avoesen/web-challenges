import "./Tag.css";

export default function Tag({ tag }) {
  const tagClass = tag === "admin" ? "tag tag--highlight": "tag"
  return <li className={tagClass}>{tag}</li>;
}
