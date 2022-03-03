// while Loop Example
//Sum of first n natural numbers

let num = 100000;
let total = 0;
let i = 1;

console.group("First Method:");
var startTime = performance.now();

while(i<= num)
{
    total +=i
    //console.log(total);
    i++;
}
    
var endTime = performance.now();
console.log("Final Total:", total);

console.log(`Call for whileLoop took ${endTime - startTime} milliseconds`);
console.groupEnd();

// ********************** Second Way *****************************
console.group("Second Method:");
var startTime = performance.now();
    total = 0;
    total = (num*(num+1))/2;
    console.log("Final Total:", total);
var endTime = performance.now();
console.log(`Call for formula method took ${endTime - startTime} milliseconds`);
console.groupEnd();