// JavaScript Functions

function singHappyBirthday(){
    console.log("Happy Birthday");
}

// person here is parameter
function singHappyBirthday(person){
    console.log("Happy Birthday", person);
}

// Same function if declared twice will override the latest one
// "Kamini" here is argument
singHappyBirthday();
singHappyBirthday("Kamini");


function sumTwoNumbers(num1,num2){
    return num1+num2;
}

console.log(sumTwoNumbers()); // as undefined+undefined is NaN
console.log(sumTwoNumbers(0)); // NaN as 0+undefined is NaN
console.log(sumTwoNumbers(3,4)); // 7
console.log(sumTwoNumbers(-3,4)); // 1
