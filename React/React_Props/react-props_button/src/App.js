import React from "react";
import "./styles.css";

export default function App() {
  return (
    <Button
      color="blue"
      disabled={false}
      text="hier könnte ihre Werbung stehen"
      onBut={handleButton}
    />
  );
}

function Button({color, disabled, text, onBut}) {
 return(
  <button style={{color: color}} disabled= {disabled} onClick={onBut}>{text}</button>
 )
}

function handleButton() { 
  alert("You clicked me!")
}