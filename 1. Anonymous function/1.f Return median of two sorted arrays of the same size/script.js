////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////-------------------- 1.f Return median of two sorted arrays of the same size.----------------/////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const findMedian = function (arr1, arr2) {
  let mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  //console.log(mergedArray)
  let midInd = Math.floor(mergedArray.length / 2);
  //console.log(midInd);
  let median;
  if (mergedArray.length % 2 == 0) {
    median = (mergedArray[midInd - 1] + mergedArray[midInd]) / 2;
    // console.log(median);
  } else {
    median = mergedArray[midInd];
    // console.log(median);
  }
  return median;
};

const array1 = [3, 4, 1, 6, 5, 2, 7];
const array2 = [9, 11, 10, 8, 12, 13, 14];

let result = findMedian(array1, array2);
console.log(result);
