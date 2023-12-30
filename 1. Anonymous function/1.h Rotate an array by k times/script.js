//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////--------------------1.h Rotate an array by k times --------------------------/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// Rotate left
const rotateArrayLeft = function (arr, k) {
  ///shift() removes first element of array
  /// push() add the element in last index of array

  for (let i = 0; i < k; i++) {
    arr.push(arr.shift());
  }
  return arr;
};

/// Rotate Right

/// pop() removes the last element of array
/// unshif() add the element in the start of the array

const rotateArrayRight = function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};

const array = [
  "racecar",
  "nitin",
  "raman",
  "madam",
  "level",
  "cars",
  "night",
  "noon",
  "cool",
];
// let resultR = rotateArrayRight(array, 4);
let resultL = rotateArrayLeft(array, 4);
console.log(resultL);
let resultR = rotateArrayRight(array, 4);
console.log(resultR);
