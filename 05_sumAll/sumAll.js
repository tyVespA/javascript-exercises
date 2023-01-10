const sumAll = function(num1, num2) {
  let result = 0;

  if (num1 > num2) {
    let num3 = num1;
    num1 = num2;
    num2 = num3;
  }
  let i = num1;

  if (num1 < 0 || num2 < 0) return "ERROR"
  if (typeof num1 != "number" || typeof num2 != "number") return "ERROR"

  for (; i <= num2; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;

// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
// sumAll(1, 4) returns the sum of 1 + 2 + 3 + 4 which is 10
