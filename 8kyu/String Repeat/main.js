// write a function called repeat_str which repeats the given string src exactly count times.

function repeatStr(n, s) {

    let repeatHere = ""

    while(n > 0) { // number is greater than zero
        repeatHere += s // empty string plus the string
        n-- // decrement number
    }

    return repeatHere


}

// completed Feb 14 2021