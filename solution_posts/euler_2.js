function computeResult() {

  var lastNum = 1;
  var lastLastNum = 0;
  var currentNum = 1;
  var buffer = 0;
  var sum = 0;


  while (currentNum < 4000000) {

    currentNum = lastNum + lastLastNum;
    buffer = currentNum;
    lastLastNum = lastNum;
    lastNum = buffer;
    console.log(currentNum);

    if (currentNum % 2 == 0) {

      sum += currentNum;

    }

  }

  document.getElementById("outputBox").innerHTML = sum;

}
