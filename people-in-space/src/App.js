import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [people, setPeople] = useState(0)
  const [peopleName, setPeopleName] = useState([])
  const [spaceCraft, setSpaceCraft] = useState()

  useEffect(() => {
    async function getPeople() {
      const response = await fetch("http://api.open-notify.org/astros.json");
      const data = await response.json();
      // console.log(data)
      setPeople(data.number)
      setPeopleName(data.people)
    }
    getPeople()
  }, [])

    function buttonClick(spaceCraftName) {
      const peopleOnCraft = peopleName.filter(
        (human) => human.craft === spaceCraftName
      );
      setSpaceCraft(peopleOnCraft);
    }


  return (
    <div className="App">
      <p>People in Space: {people} </p>
      <ul>
        {peopleName.map((human) => (
          <li key={human.name}>{human.name}</li>
        ))}
      </ul>
      <button type="button" onClick={() => buttonClick("ISS")}>
        ISS
      </button>
      <button type="button" onClick={() => buttonClick("Tiangong")}>
        Tiangong
      </button>
      <button type="button" onClick={() => buttonClick("All")}>
        All
      </button>
      {spaceCraft.length > 0 && (
      <ol>
        {spaceCraft.map((human) => (
          <li key={human.name}>{human.name}</li>
        ))}
      </ol>)}
    </div>
  );
}

export default App;
