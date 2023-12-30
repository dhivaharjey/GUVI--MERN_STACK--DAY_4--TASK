///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////--------------------1.h Rotate an array by k times --------------------------/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Rotate left
const rotateLeft = (function rotate(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
})(
  [
    "racecar",
    "nitin",
    "raman",
    "madam",
    "level",
    "cars",
    "night",
    "noon",
    "cool",
  ],
  2
);

console.log(rotateLeft);

//// Rotate right
const rotateRight = (function rotate(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.push(arr.shift());
  }
  return arr;
})(
  [
    "racecar",
    "nitin",
    "raman",
    "madam",
    "level",
    "cars",
    "night",
    "noon",
    "cool",
  ],
  3
);

console.log(rotateRight);
