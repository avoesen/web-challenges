// Implement the launch sequence function here and export it as the default export.
import {rocket} from "./core/rocket.js"
import { loadPayload } from "./core/load.js";
import {fuel} from "./core/fuel.js";
import {countdown} from "./core/countdown.js";
import {liftoff} from "./core/liftoff.js";
import {deployPayload} from "./core/deploy.js";

export default function launch(rocket) {
    loadPayload(rocket);
    rocket.fuel = true;
    fuel();
    rocket.countdown = 5;
    countdown();
    liftoff();
    deployPayload();

}
launch(rocket.id);