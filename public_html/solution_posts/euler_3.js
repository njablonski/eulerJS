function getLargestPrime(num) {

  // we check for factors up to the square root of the input
  for(i = 2; i <= Math.sqrt(num); i++) {

    // if we find a factor, we divide it out of the input and recurse
    if(num % i == 0) {

      num /= i;
      return getLargestPrime(num);

    }

  }

  // if we make it here, we've divided out all smaller prime factors and num is our answer
  return num;

}

function main() { 

  // write the result of getLargestPrime() on the given number to the output area
  document.getElementById("outputBox").innerHTML = getLargestPrime(600851475143);

}

main();
