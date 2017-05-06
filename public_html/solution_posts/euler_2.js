function main() {

  // three variables are needed to generate the sequence
  var currentNum = 2;
  var lastNum = 1;
  var buffer = 0;

  // plus one to hold our running sum
  var sum = 0;

  // loop generates sequence until it exceeds 4 million
  while (currentNum < 4000000) {

    // if the current number is even, add it to our sum
    if (currentNum % 2 == 0) {

      sum += currentNum;

    }

    // generate the next number
    buffer = currentNum;
    currentNum += lastNum;
    lastNum = buffer;

  }

  // write sum to output area
  document.getElementById("outputBox").innerHTML = sum;

}

main();
