/// DAY 4 TASK

/// Using ANONYMOUS FUNCTION
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////------------------1.a Print odd number in an array-----------------------------///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const oddNumber = function (arr) {
  let odd = [];
  for (let val of arr) {
    if (val % 2 !== 0) {
      odd.push(val);
    }
  }
  return odd;
};

const array = [12, 45, 22, 46, 78, 2, 13, 11, 19, 23];
const array1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 27,
  31, 89, 77, 73, 115, 110, 222, 227, 257,
];
oddNumber(array);
oddNumber(array1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////------------1.b Convert all the strings to title caps in a string array--------------------------////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const titleCaps = function (str) {
  let strg = str.toLowerCase().split(" ");
  //console.log(strg);
  for (let i = 0; i < strg.length; i++) {
    strg[i] = strg[i].charAt(0).toUpperCase() + strg[i].slice(1);
  }
  return strg.join(" ");
};

/*
1. Lowercase the string

   2. Split the string into an array of strings
 
   1st word: "i'm"    ---->  (word.charAt(0).toUpperCase() + word.slice(1));
                          i'm".charAt(0).toUpperCase() + "i'm".slice(1);
                               "I"                     +     "'m";
      
     same process will happen for all words  
     */

const titleCaps1 = function (str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
};

/* Map process
    1st word: "i'm" => word.replace(word[0], word[0].toUpperCase());
                       "i'm".replace("i", "I");


      same for all words
                       */
console.log(titleCaps("i'm DhIvahar FRoM THeNi ss"));
console.log(titleCaps1("I'm DhIvahar FroM THeNi "));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////---------------------------1.c  Sum of all numbers in an array----------------------///////////////////////////////////////----------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sumOfArray = function (arr) {
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }
  return sum;
};
const array2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 27,
  31, 89, 77, 73, 115, 110, 222, 227, 257,
];

console.log(sumOfArray(array2));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////--------------------------- 1.d   Return all the prime numbers in an array--------------------------------///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const primeNumbersArray = function (arr) {
  const arrayOfPrimeNumbers = [];

  for (let val of arr) {
    let flag = true;
    if (val <= 1) {
      flag = false;
    }

    for (let i = 2; i < val; i++) {
      if (val % i === 0) {
        flag = false;
        break;
      }
    }

    if (flag) {
      arrayOfPrimeNumbers.push(val);
    }
  }

  return arrayOfPrimeNumbers;
};
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16, 19];
const result = primeNumbersArray(numbers);
console.log(result);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////---------------1.e Return all the palindromes in an array -----------------///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const isPalindrome = function (arr) {
  let arrayOfPalindrome = [];
  for (let val of arr) {
    let flag = true;
    let k = val.length - 1;

    for (let i = 0; i <= val.length / 2; i++) {
      if (val[i] != val[k]) {
        //console.log(str[i], str[k]);
        flag = false;
      }
      k--;
    }

    if (flag) {
      arrayOfPalindrome.push(val);
      //console.log(arr[ind]);
    }
  }
  return arrayOfPalindrome;
};

const arr = [
  "racecar",
  "nitin",
  "raman",
  "madam",
  "level",
  "cars",
  "night",
  "noon",
  "cool",
  "rotor",
  "pump",
  "peep",
];

let result = isPalindrome(arr);
console.log(result);

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////-------------------------1.g Remove duplicates from an array----------------------///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const removeDuplicate = function (arr) {
  let orginalArr = [];

  for (let value of arr) {
    if (arr.indexOf(value) == arr.lastIndexOf(value)) {
      orginalArr.push(value);
    }
  }
  return orginalArr;
};

const array = [2, 3, 1, 4, 5, 6, 7, 3, 4, 5, 68, 8, 9, 23, 4, 5, 11, 35, 67];

let result = removeDuplicate(array);

console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////--------------------1.h Rotate an array by k times --------------------------/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// Rotate right
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
