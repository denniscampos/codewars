/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"

*/

function solution(string) {
    return string.split(/a-z/).join(' ');
}

// Better solution
const solution = string => string.split(/(?=[A-Z])/).join(' ')
