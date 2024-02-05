import React from "react";
import "./styles.css";

export default function App(children) {
  return (
    <main>
      <Button>1. Click me!</Button> 
      <Button>2. Click me!</Button> 
      <Button>3. Click me!</Button> 
      <Button>4. Click me!</Button> 
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
