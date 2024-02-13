import { volumes } from "../lib/data";

export default function theFellowshipOfTheRing() {
    const volume1 = volumes.find(
     ({slug}) => slug === "the-fellowship-of-the-ring"
    );
    console.log(volume1);
    return (
        <>
            <h1>new title</h1>
        </>
    )
}