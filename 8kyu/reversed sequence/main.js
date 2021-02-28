// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 >> [5,4,3,2,1]

const reversedSeq = n => {
    let arr = []
    for(i = n; i >= 1; i--) {
        arr.push(i)
    }
    return arr
}
