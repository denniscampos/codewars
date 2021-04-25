/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
<<<<<<< HEAD
......
=======
.
>>>>>>> 85c299938c649f75f00b037764e39f2d6298c31e
*/

function xo(str) {
  const x = str.match(/x/gi);
  const o = str.match(/o/gi);

  return (x && x.length) === (o && o.length);
}
