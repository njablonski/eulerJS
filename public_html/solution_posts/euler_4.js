function checkIfPalindrome(num) {
 
  // store our input as a string
  var stringifiedNum = num.toString();

  // record the first and last character indices of the string
  var firstIndex = 0;
  var lastIndex = stringifiedNum.length - 1;

  // loop a number of times equal to half the string length
  for(j = 1; j <= (stringifiedNum.length / 2); j++) {

    // if the values in our equidistant indices don't match, return false
    if(stringifiedNum.charAt(firstIndex) != stringifiedNum.charAt(lastIndex)) {

      return false;

    }

    // move each index one character towards the center of the string
    firstIndex++;
    lastIndex--;

  }

  // if we get here, the input is palindromic
  return true;

}

function main() {

  // variable to store the largest palindrome we've found so far
  var biggestSoFar = 0;

  // nested loops to produce all products of two 3-digit numbers greater than 499
  for(i = 500; i <= 999; i++) {

    for(k = 500; k <= 999; k++) {

      // if the number we're on is bigger than any palindrome yet found, check to
      // see if it's a palindrome, and store it if so
      if(i*k > biggestSoFar) {

        if(checkIfPalindrome(i*k)) {

          biggestSoFar = i*k;

        }
      }
    }
  }

  // write the biggest palindrome we found to the output area
  document.getElementById("outputBox").innerHTML = biggestSoFar;

}

main();
