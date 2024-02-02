import React from "react";
import "./styles.css";

export default function App() {
  return articleComponent();
}
function articleComponent() {
  return (
    <article>
      <h2 className="article_title">Hello World!</h2>
      <label htmlFor="test" >
        type your name here:
      </label>
      <input id="test"></input>
      <a className="article_link" href="https://de.wikipedia.org/wiki/Vorname">
        No clue what to type here?
      </a>
    </article>
  );
}