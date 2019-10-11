const pets = [{
    name: "Betsey",
    breed: "Husky",
    age: "2 years old"
}, {
    name: "Carlos",
    breed: "Labrador",
    age: "5 years old"
}, {
    name: "Sweetie",
    breed: "St. Bernard",
    age: "6 months old"
}];

let petsString = JSON.stringify(pets);

console.log(petsString);

console.log(JSON.parse(pets));