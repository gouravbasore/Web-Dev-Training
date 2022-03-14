// Lexical scope

const myVar = "globalScope";   // Global Scope
console.log("Global", myVar);

let myfunc = () => {
    const myVar = "myfuncScope";   // Functional Scope
    console.log("myFunc", myVar);
    const myInnerFunc = () => {
        const myVar = "myInnerFunc";
        console.log("myInnerFunc", myVar);
    }
    myInnerFunc();
};

myfunc();

const AlgebraMethods = (a, b) => {
    const pi = (22 / 7).toFixed(2);
    const areaCircle = (a) => a ** pi;
    const circumferenceCircle = (a) => a * pi * 2;
    const sum = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a/b;

    console.log(areaCircle(a));
    console.log(circumferenceCircle(a));
    console.log(sum(a,b));
    console.log(sub(a,b));
    console.log(mul(a,b));
    console.log(div(a,b));
    return mul(a, b);
};

// console.log(AlgebraMethods(7, 5));
// console.log(pi);  // pi is undefined