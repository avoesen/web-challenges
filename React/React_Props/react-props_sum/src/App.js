import React from "react";
import "./styles.css";

export default function App() {
  return <Sum number1={2} number2={4}/>;
}

function Sum({number1, number2}) {
  return <p>{number1} + {number2} = {number1 + number2}</p>;
}