function computeResult() {

  var sum = 0;
  var count = 0;

  while (count < 1000) {

    if ((count % 3 == 0) || (count % 5 == 0)) {
      sum += count;
    }

    count += 1;
  }

  document.getElementById("outputBox").innerHTML = sum;

}
