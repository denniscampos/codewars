/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
ALGORITHMSUTILITIESSTRINGS

powered by

Solution:
1
// return masked string
2
function maskify(cc) {
3
return cc.replace(/.(?=.{4})/g, "#");
4
}
5
​
 Great! You may take your time to refactor/comment your solution. Submit when ready.×
Sample Tests:
1
describe("maskify", function(){
2
  it("should work for some examples", function(){


*/

function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, "#")
}