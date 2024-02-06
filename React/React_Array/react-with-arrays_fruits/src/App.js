import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "apple 🍎", color: "red"},
    { id: 2, name: "banana 🍌", color: "yellow"},
    { id: 3, name: "orange 🍊", color: "orange"},
    { id: 4, name: "kiwi 🥝", color: "green"},
    { id: 5, name: "grape 🍇", color: "purple"},
  ];

  
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card
          key={fruit.id}
          name={fruit.name}
          color={fruit.color}
          // className={`card card--${color}`}
          // style={{ backgroundColor: fruit.color }}
          />
          ))}
          
    </div>
  );
}
