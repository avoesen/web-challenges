import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialRooms = [
  {
    name: "Living Room",
    isOn: true,
    id: 1,
  },
  {
    name: "Kitchen",
    isOn: true,
    id: 2,
  },
  {
    name: "Bedroom",
    isOn: true,
    id: 3,
  },
  {
    name: "Bathroom",
    isOn: true,
    id: 4,
  },
  {
    name: "Garage",
    isOn: true,
    id: 5,
  },
  {
    name: "Porch",
    isOn: true,
    id: 6,
  },
  {
    name: "Garden",
    isOn: true,
    id: 7,
  },
  {
    name: "Office",
    isOn: true,
    id: 8,
  },
];

export default function App({ Component, pageProps }) {
  const [rooms, setRooms] = useState(initialRooms);
  

  function isOn(roomsId) {
    const toggleRooms = rooms.map((room) => room.id === roomsId?{...room, isOn: !room.isOn} : room);
    setRooms(toggleRooms);
  }
      
   const howManyLights = rooms.reduce((a,b) => a + (b.isOn? 1: 0), 0)
  
 
  function turnAllOn() {
    const roomsOn = rooms.map((room) => ({...room, isOn: true}));
    setRooms(roomsOn)
  }
 
  function turnAllOff() {
    const roomsOff = rooms.map((room) => ({...room, isOn: false}));
    setRooms(roomsOff)
  }
  
  const isDimmed = howManyLights === 0;
  
  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        rooms={rooms}
        isOn={isOn}
        roomsOnCount={howManyLights}
        turnAllOff={turnAllOff}
        turnAllOn={turnAllOn}
      />
    </Layout>
  );
}
