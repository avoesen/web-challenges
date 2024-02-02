import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}
function HelloWorldArticle() {
   return( <article>
      <h1>Hello, </h1>
      <p>World!</p>
    </article>
   )
}