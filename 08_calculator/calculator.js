const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, currentItem) => {
    return total + currentItem;
  },0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => {
    return total * currentItem;
  },1); 
};

const power = function(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Do not edit below this line

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
