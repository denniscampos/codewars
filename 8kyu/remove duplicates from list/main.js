/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

function distinct(a) {
  const eliminateDuplicates = [...new Set(a)];

  return eliminateDuplicates;
}

// Better Solution
const distinct = a => [...new Set(a)]
