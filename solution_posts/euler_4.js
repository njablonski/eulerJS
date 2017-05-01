function checkIfPalindrome(num) {

  var stringifiedNum = num.toString();
  var loopRuns = stringifiedNum.length / 2;
  var firstIndex = 0;
  var lastIndex = stringifiedNum.length - 1;

  console.log(stringifiedNum.length);

  for(j = 1; j <= loopRuns; j++) {

    if(stringifiedNum.charAt(firstIndex) != stringifiedNum.charAt(lastIndex)) {

      return false;

    }

    firstIndex++;
    lastIndex--;

  }

  return true;

}

function computeResult() {

  var outputFormatter = "None found.";
  var biggestSoFar = 0;
  var product = 0;

  for(i = 500; i <= 999; i++) {

    for(k = 500; k <= 999; k++) {

      product = i * k;

      if(checkIfPalindrome(product) && (product > biggestSoFar)) {

        biggestSoFar = product;
        outputFormatter = "Biggest palindrome is " + product + ", which is the product of " + i + " and " + k + ".";

      }
    }
  }

  document.getElementById("outputBox").innerHTML = outputFormatter;

}
