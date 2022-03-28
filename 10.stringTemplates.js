// String Templates

let age = 29;
let firstName = "Gourav";
let wifeName = "Mani";

// "My name is Gourav and my age is 29 and I am married to Mani"
let aboutMe = "My name is " +firstName+ " and my age is " +age+ " and I am married to " +wifeName; 
console.log(aboutMe);

aboutMe = `My name is ${firstName} and my age is ${age} and I am married to ${wifeName}`

console.log(aboutMe);