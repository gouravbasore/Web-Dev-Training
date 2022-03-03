// Array Operations

// push // inserts new element in the last to the array // returns new length //  O(1)
// pop // removes the last element of the array // returns removed element // O(1)
// shift // removes the first element of the array // returns removed element // O(n)
// unshift // inserts new element in the beginning to the array // returns new length // O(n)

fruits = ["apple", "grapes", "mango"];

console.log(fruits.push("kiwi")); 
console.log(fruits.pop());
console.log(fruits.shift("jackfruit"));
console.log(fruits.unshift("jackfruit"));

console.log(fruits);