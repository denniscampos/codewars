// complete the square sum function so that it squares each number passed into it and then sums the results together.

// for example, for[1,2,3] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



function squareSum(numbers) {

    const reducer = (a, numbers) => a + numbers ** 2;

    return numbers.reduce(reducer, 0)

}