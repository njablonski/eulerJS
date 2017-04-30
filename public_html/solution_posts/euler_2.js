function computeResult() {

  var lastNum = 1;
  var lastLastNum = 0;
  var currentNum = 1;
  var buffer = 0;
  var sum = 0;


  while (currentNum < 4000000) {

    currentNum = lastNum + lastLastNum;
    lastLastNum = lastNum;
    lastNum = currentNum;

    if (currentNum % 2 == 0) {

      sum += currentNum;

    }

  }

  document.getElementById("outputBox").innerHTML = sum;

}
