/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

const findShortWord = s => Math.min(...s.split(' ').map(_=>_.length))