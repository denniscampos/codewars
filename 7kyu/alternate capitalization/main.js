/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity
*/

function capitalize(s) {
  let even = s.toLowerCase().split("");
  let odd = s.toLowerCase().split("");

  for (let i = 0; i < even.length; i += 2) {
    even[i] = even[i].toUpperCase();
  }

  for (let i = 1; i < even.length; i += 2) {
    odd[i] = odd[i].toUpperCase();
  }

  return [even.join(""), odd.join("")];
}
