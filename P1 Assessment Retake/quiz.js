/* 1.
Using filter make a function that is given an array of strings,
and return a new array that only includes those that are 5 characters or fewer in
length
*/
function fiveCharactersOrFewerOnly(arr) {
  let newArr = []

  if (arr.length > 6)
      newArr.push(arr);

  for (let i = 0; i < arr.length; i++)
  return newArr
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));
//expected output: ["by", "dog", "wolf", "eaten"]


/* 2.
Make a function that takes a string and returns true if the string could be a
number else return false.
*/
function isNum(str) {
  for (let i = 0; i < str.length; i++) {
      if (str[i] < '0' || str[i] > '9') {
        return false;
      } else {
        return true;
      }
  }
};
//test
console.log(isNum("3"))
//expected output: true
console.log(isNum("three"))
//expected output: false


/*3
Make a function that takes an array and returns the average of the array.
*/

function averageArray(arr) {
  const sum = arr.reduce((acc, cur) => (acc + cur))
  const average = sum / arr.length;
    return average
  }
//test
console.log(averageArray[1,2,3])
//expected output: 2
console.log(averageArray[5, -10, 10, 20])
//expected output 6.25


/* 4.
Using Reduce,
Turn an array of numbers into a string of the numbers.
*/
function stringConcat(arr) {
  return arr.reduce((i, s) => i.toString() + s.toString())
}
//test
console.log(stringConcat([1,2,3]));
//expected output: "123"


// 5
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty arr
function repl (r, num) {
  let newArr = []

  if (r < 0)
    return newArr;

  for (let i = 0; i < r; i++)
    newArr.push(num)

  return newArr;
}

console.log(repl(3, 5)) // [5, 5, 5]
console.log(repl(1, 69)) // [69]
console.log(repl(-2, 6)) // []


/*6.
OOP has 4 pillars and we learned about each in this phase.
for each question - answer which pillar relates to the statement
   A. The process by which one object can acquire the properties of another object
       A. Answer: Inheretance
   B. To hide away implementation details inside a function, so when you call the function you don't have to understand exactly what it is doing
       B. Answer: Abstraction
   C. The action of enclosing something in its own container of related data
       C. Answer: Encapsulation
    D. When a child class has its own unique behavior but still shares the same
methods or behaviors of its parent's class
       D. Answer: Polymorphism



/*  7.
write a function takes in a boolean and returns that boolean as a string
 */
function booleanToString(bool){
  return bool + "";
}
//test
console.log(booleanToString(true))
//expected output 'true' (as string)
//typeOf should be used to test it


/* 8.
Write a function to check whether there is at least one element
which occurs in two given sorted arrays of integers.
*/
function check_common_element(arra1, arra2) {
  for (let i = 0; i < arra1.length; i++) {
    if (arra2.indexOf(arra1[i]) != -1)
      return true;
  }
    return false;
};
//test
console.log(check_common_element([1,2,3], [3,4,5]));
//expected output: true
console.log(check_common_element([1,2,3], [5,6,7]));
//
