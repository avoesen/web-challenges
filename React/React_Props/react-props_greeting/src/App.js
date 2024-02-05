import "./styles.css";

export default function App() {
  return <Greeting name="Roland"/>;
}

function Greeting({name}) {
  return (<p>Hello, {name==="Roland"?"Coach":"Anna"}!</p>)
}
