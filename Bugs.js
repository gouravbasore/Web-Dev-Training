//Bug 1 : Using technique of + will convert string to number, but be cautious it does not chck if the string is actually a number or not

+"2" +3 // 5 -> Correct
+"a" + 3 // NaN  -> Correct
console.log(+"a" + 3)  // NaN -> Correct
typeof (+"a" + 3)  // Number -> Incorrect
// typeof NaN // Number


//Bug 2:
 