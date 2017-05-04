function squareTheSum(num) {

  var sum = 0;
  var result = 0;

  for(i = 1; i <= 100; i++) {

    sum += i;

  }

  result = sum * sum;

  return result;

}

function sumTheSquares(num) {

  var sum = 0;

  for(i = 1; i <= 100; i++) {

    sum += i * i;

  }

  return sum;

}

function computeResult() {

  document.getElementById("outputBox").innerHTML = squareTheSum(100) - sumTheSquares(100);

}
