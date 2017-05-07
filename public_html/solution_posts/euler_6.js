function squareTheSum(num) {

  // variables to keep a running sum and store final result
  var sum = 0;
  var result = 0;

  // loop through numbers 1-100 and add them to running sum
  for(i = 1; i <= num; i++) {

    sum += i;

  }

  // square the sum
  result = sum * sum;

  return result;

}

function sumTheSquares(num) {

  // variable to keep a running sum
  var sum = 0;

  // loop through numbers 1-100 and add their squares to running sum
  for(i = 1; i <= num; i++) {

    sum += i * i;

  }

  return sum;

}

function main(num) {

  // store the difference between the squared sum and summed squares
  var difference = squareTheSum(num) - sumTheSquares(num);

  // write our final result to the output area
  document.getElementById("outputBox").innerHTML = difference;

}

main(100);
