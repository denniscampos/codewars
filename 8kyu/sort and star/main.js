/*
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

<<<<<<< HEAD
// map & slice is unnecessary.
=======
>>>>>>> 3eabcbb7eec0cd6bbd54eea9596cf8ab5c7da3bf
const twoSort = (s) =>
  s
    .sort()[0]
    .split("")
    .map((x) => x + "***")
    .join("")
    .slice(0, -3);
<<<<<<< HEAD

// better solution
const twoSort = (s) => s.sort()[0].split("").join("***");
=======
>>>>>>> 3eabcbb7eec0cd6bbd54eea9596cf8ab5c7da3bf
