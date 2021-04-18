/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case ..
*/

function isIsogram(str) {
  const regex = /([a-zA-Z]).*?\1/i;

  if (str.match(regex)) {
    return false;
  } else {
    return true;
  }
}

// better version
const isIsogram = (str) => (str.match(/([a-zA-Z]).*?\1/i) ? false : true);
