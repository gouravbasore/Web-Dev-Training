// Primitive vs Reference Types
// Primitive data types are saved as stack and each one has its own pointer
// Non-Primitive data types like Arrays/Objects are saved in heap and their pointers(address) are stored in stack
let num1 = 7;
let num2 = num1;
console.log(num1, num2);
num2=88;
console.log(num1, num2);

let array1 = ["Apple", "Oranges", "Mango"];
let array2 = array1;

console.log(array1, array2);

array1.push("Banana");
console.log(array1, array2);