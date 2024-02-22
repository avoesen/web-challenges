import Chance from "chance"; 

const chance = new Chance()

export default function handler(request, response) {
    const character = {
        name: chance.name(),
        phone: chance.phone(), 
        age: chance.age(), 
        twitter: chance.twitter(), 
        geohash: chance.geohash(), 
    }
    response.statusCode = 200;
    response.json(character)
}