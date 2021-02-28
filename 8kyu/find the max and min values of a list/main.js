// Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

// #Examples
// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0


let min = function(list){
    
    return Math.min(...list); // this takes the min integer of an array
}

let max = function(list){
    
    return Math.max(...list); // this takes the max integer of an array
}

// better version
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);