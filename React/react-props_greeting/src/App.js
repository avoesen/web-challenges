import "./styles.css";

export default function App() {
  return <Greeting name="Coach"/>;
}

function Greeting({name}) {
  return (<p>Hello, {name==="Coach"?"Roland":"Anna"}!</p>)
}
