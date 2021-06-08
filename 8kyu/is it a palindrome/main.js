/*
Write function that checks if a given string (case insensitive) is a palindrome.

*/

function isPalindrome(x) {
    const check = x.toLowerCase().split("")
    const results = check.every((item, index) => {
        return item === check[check.length - index - 1]
    })

    return results.join("")
}
