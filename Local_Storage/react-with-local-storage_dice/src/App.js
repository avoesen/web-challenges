import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", {defaultValue: []});

  function handleRoll(addRoll) {
    setRolls([addRoll, ...rolls])
  }
  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={rolls[0]?.value} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
