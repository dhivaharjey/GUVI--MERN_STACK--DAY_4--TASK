////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////--------------------------- 1.d   Return all the prime numbers in an array--------------------------------///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to get all the prime numbers in an array
const printPrimeNumbers = (function isPrime(arr) {
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
})([2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(printPrimeNumbers);
