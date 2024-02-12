console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
    console.log(json.results)
    const found = json.results.find((item) => item.name === "R2-D2")
    console.log(found.eye_color);
    console.log(json.results[2].eye_color)
}

fetchData();
