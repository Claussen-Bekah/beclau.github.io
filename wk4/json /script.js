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

var json = '{"name":"Bekah", "age":27}';

let petsString = JSON.stringify(pets);

console.log(petsString);

obj = JSON.parse(json);

console.log(obj.name);

console.log(obj);

function replacer(key, value) {
    console.log(typeof value);
    if(key === 'age') {
        return undefined;
    }
return value;
}

let petsString2 = JSON.stringify(pets, replacer);

console.log(petsString2);

