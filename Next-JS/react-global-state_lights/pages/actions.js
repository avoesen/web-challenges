import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({turnAllOn, turnAllOff, roomsOnCount}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        turnAllOff={turnAllOff}
        turnAllOn={turnAllOn}
        roomsOnCount={roomsOnCount}
      />
    </>
  );
}
