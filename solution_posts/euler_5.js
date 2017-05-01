function isDivisibleByRange(num) {

  for(i = 11; i <= 20; i++) {

    if(num % i != 0) {

      return false;

    }

  }

  return true;

}

function computeResult() {

  var haveWeFoundIt = false;
  var numToCheck = 9699680;

  while(haveWeFoundIt == false) {

    if(isDivisibleByRange(numToCheck)) {
      
      document.getElementById("outputBox").innerHTML = numToCheck;
      haveWeFoundIt = true;

    }

    numToCheck += 20;

  }

}
