function getLargestPrime(num) {

  for(i = 2; i <= Math.sqrt(num); i++) {

    if(num % i == 0) {

      num /= i;
      return getLargestPrime(num);

    }

  }

  return num;

}

function computeResult() { 

  document.getElementById("outputBox").innerHTML = getLargestPrime(600851475143);

}
