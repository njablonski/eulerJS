function isDivisibleByRange(num) {

  // loop through range 11-20
  for(i = 11; i <= 20; i++) {

    // return false if num not evenly divisible by i
    if(num % i != 0) {

      return false;

    }

  }

  // if divisble by all numbers in the loop, it meets our condition
  return true;

}

function main() {

  // start near the product of all primes in the range 1-20
  var num = 9699680;

  // while our num doesn't meet the target condition
  while( ! isDivisibleByRange(num) ) {

    // keep incrementing it by 20
    num += 20;

  }

  // write the num that passed our check to the output area
  document.getElementById("outputBox").innerHTML = num;
    
}

main();
