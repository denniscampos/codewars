
// function pipeFix(numbers){

//   let min = numbers[0]; // access the first index, regardless of number. 
//   let max = numbers[numbers.length - 1] // checks array and subtracts one (because zero is 1)
//   let arr = []; // creates empty array.

//   for(let i = min; i <= max; i++) { // loop through numbers 
//     arr.push(i)
//   }
  
//   return arr
  
// }

// the above code is what I found. My version is below but I find the code above is more efficient than mine.
function pipeFix(numbers) {

    let emptyArr = []

    for(let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        emptyArr.push(i)
    }
    return emptyArr
}

// completed 02/13/2021