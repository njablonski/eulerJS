function main() {

  // initialize aggregator and incrementor variables
  var sum = 0;
  var count = 0;

  // loop increments count through range 0-999
  while (count < 1000) {

    // add count to sum if it's divisible by 3 or 5
    if ((count % 3 == 0) || (count % 5 == 0)) {
      sum += count;
    }

    count += 1;
  }

  // write the final value of sum to the output area
  document.getElementById("outputBox").innerHTML = sum;

}

main();
