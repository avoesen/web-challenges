console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
    console.log("Welcome! You are logged in as Brunhilde1984.");
} else {console.log("Access demied!");}

// Part 2: Even / Odd
const number = 6;

const numberEvenOdd = number % 2 

if (numberEvenOdd === 0) {
    console.log("even number");
} else {
    console.log("odd number"); 
}

// Part 3: Hotdogs
const numberOfHotdogs = 200;

if ( numberOfHotdogs <= 5) {
    //let hotdogPrice = numberOfHotdogs * 2
    console.log(numberOfHotdogs * 2 + " €")
} else if (numberOfHotdogs <= 100) {
    let hotdogPrice = numberOfHotdogs * 1.5
    console.log(hotdogPrice + " €")
} else if (numberOfHotdogs <= 1000000) {
    let hotdogPrice = numberOfHotdogs * 1
    console.log(hotdogPrice + " €")
} else {
    let hotdogPrice = numberOfHotdogs * 0.1
    console.log(hotdogPrice + " €")
}

// Part 4: Daytime
const currentHour = 17;

const statement = currentHour < 17 ? "Still need to learn...": "Partytime!!!" ;

console.log(statement);

// Part 5: Greeting
const name = "Archibald";

let greetingName = name === "Niklas" ? "Coach!" : name;

const greeting = "Hello " + greetingName  + "!";

console.log(greeting);
