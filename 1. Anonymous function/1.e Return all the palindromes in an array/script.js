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
