/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  const sonsAge = sonYearsOld * 2;
  const dadsAge = dadYearsOld - sonsAge;

  return Math.abs(dadsAge);
}

// better solution
const twiceAsOld = (d, s) => Math.abs(d - 2 * s);
