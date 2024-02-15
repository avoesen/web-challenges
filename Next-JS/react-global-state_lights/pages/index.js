import Link from "../components/Link";

export default function HomePage({ rooms, isOn, roomsOnCount, turnAllOn, turnAllOff }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{roomsOnCount} light(s) are on.</p>
      <p>
        <Link rooms={rooms} isOn={isOn} href="/rooms">
          All Rooms →
        </Link>
      </p>
      <p>
        <Link href="/actions" turnAllOff={turnAllOff} turnAllOn={turnAllOn} roomsOnCount={roomsOnCount}>Quick Actions →</Link>
      </p>
    </div>
  );
}
