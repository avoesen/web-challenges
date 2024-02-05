import "./styles.css";
import {useState} from 'react'

export default function App() {
  const [isActive, setisActive] = useState(false)

  function handleClick() {
    // isActive = !isActive;
    // Check that the value changes correctly.
    console.log(isActive);
    setisActive(!isActive)
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{isActive? "Deactivate":"Activate"}</button>
    </main>
  );
}
