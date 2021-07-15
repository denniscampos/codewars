/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

*/

function stringTransformer(str) {
    const splitStr = str.split("")

    return splitStr.map(e => {
        if(e === e.toUpperCase()) {
            return e.toLowerCase()
        } else if(e === e.toLowerCase()){
            return e.toUpperCase()
        }
    }).join("").split(" ").reverse().join(" ")
    
}