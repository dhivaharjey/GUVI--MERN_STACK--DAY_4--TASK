/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////---------------------------1.c  Sum of all numbers in an array----------------------///////////////////////////////////////----------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sumOfArray = (function sumOfArr(arr) {
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }
  return sum;
})([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 27,
  31, 89, 77, 73, 115, 110, 222, 227, 257,
]);
console.log(sumOfArray);