/// DAY 4 TASK

/// Using IIFE FUNCTION

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////------------------1.a Print odd number in an array-----------------------------/////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const oddNumber = (function printOdd(arr) {
  let dd = [];
  for (let val of arr) {
    if (val % 2 !== 0) {
      // console.log(val);
      dd.push(val);
    }
  }
  return dd;
})([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 27,
  31, 89, 77, 73, 115, 110, 222, 227, 257,
]);

console.log(oddNumber);
