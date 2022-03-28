// objects
// objects are reference type
// objects store key value pairs
// obects don't have index

// Objects Creation
// {} => is also called as Object Literal

const person = {
    fname: "Gourav",
    lname: "******",
    age: 29,
    favPerson: "Mani",
    hobbies: ["listening", "sleeping", "travelling", "loving"]

}

console.log(person);
console.log(typeof person);
console.log(person.favPerson);
console.log(person["favPerson"]); // all keys are string in objects
console.log(person.hobbies);

// adding or updating more key value pairs
person.gender = "male";
person.lname = "Basore";
console.log(person);