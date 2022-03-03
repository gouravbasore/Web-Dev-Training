// Array Destructuring
const myArray = ["value1", "value2"];
// Tedius Way
let myVar1 = myArray[0];
let myVar2 = myArray[1];

//Shortcut
let [myVar3,myVar4,myVar5,myVar6] = [...myArray].map(ele => ele.toUpperCase());  // if the array does has less values, those will be undefined


console.log(myVar1, myVar2, myVar3, myVar4, myVar5, myVar6);  // Printing all variables