// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let dummyNumber = 0;
  let number = [];
  let sign = 1;

  dummyNumber = x.toString().split("");
  var i;
  for (i = dummyNumber.length - 1; i >= 0; i--) {
    number.push(dummyNumber[i]);
  }
  dummyNumber = number.join("");
  if (Math.sign(x) === -1) {
    sign = -1;
  }
  dummyNumber = parseInt(dummyNumber) * sign;
  if (dummyNumber > 2147483647 || dummyNumber < -2147483648) return 0;

  return dummyNumber;
};
