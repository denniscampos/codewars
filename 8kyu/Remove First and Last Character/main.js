// It's pretty straightfoward. Your goal is to create a function that removes the first and last character of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. 

function removeChar(str) {

    let removeFirstAndLast = str.substring(1, str.length - 1)
    // substring

    return removeFirstAndLast

}