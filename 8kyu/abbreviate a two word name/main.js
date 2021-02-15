// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name){

    const someName = name.split(' ')
    const initials = someName.shift().charAt(0) + "." + someName.pop().charAt(0)
    // The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
    
    // The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
    
    return initials.toUpperCase()
      
}
    