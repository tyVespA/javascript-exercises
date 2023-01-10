const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
  if (arr.length == 0) return 0
  let sum = 0

	// for (let i of arr) {
  //   sum += arr[i]
  // }
  // return sum

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
};

const multiply = function(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i]
  }
  return result
};

const power = function(num1, num2) {
  let result = 1

  for(; num2 > 0; num2--) {
    result = result * num1
  }
  return result
};

const factorial = function(num) {
  let result = 1;
	for (let i = num; i > 0; i--) {
    result = result * i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
