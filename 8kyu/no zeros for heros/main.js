/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

function noBoringZeros(n) {
  const str = n.toString();
  const arr = str.split("");
  if (arr[0] === "0") {
    return parseInt(arr.join(""));
  }
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === "0") {
      arr.splice(i, 1);
    } else {
      return parseInt(arr.join(""));
    }
  }
}
