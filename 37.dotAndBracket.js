// Difference b/w dot notation and bracket notation
// The properties are shown in alphabetical order in Chrome Dev Tools
const person = {
    fname: "Gourav",
    lname: "******",
    age: 29,
    favPerson: "Mani",
    "person hobbies": ["listening", "sleeping", "travelling", "loving"]
}

//console.log(person["person hobbies"]);
console.log(person.favPerson);
console.log(person["person hobbies"]); // It allows to query keys with spaces

// Adding a key from a variable 
const key = "email";

person[key] = "Gourav_Basore@hotmail.com"; //dynamic Key
console.log(person.email);
console.log(person);
