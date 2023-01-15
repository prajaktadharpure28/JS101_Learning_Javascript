// Use the above function to print the Primes from 2 to a given limit

function printPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
      let isPrime = true;
  
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) 
      console.log(i);
    }
  }
  
  printPrimes(20);