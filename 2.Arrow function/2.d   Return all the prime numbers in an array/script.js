////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////-------------------- 2.d Return all the prime numbers in an array -------------///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const primeNumbersArray = (arr) => {
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
