/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

For example:

solution("1", "22") // returns "1221"
solution("22", "1") // returns "1221"
*/

function solution(a, b) {
  const short = a.length < b.length ? a : b;
  const long = a.length > b.length ? a : b;

  return short + long + short;
}
