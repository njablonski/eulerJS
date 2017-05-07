function main(rangeMax) {

  var nums = [];
  nums[0] = false;
  nums[1] = false;

  for(i = 2; i <= rangeMax; i++) {

    nums[i] = true;

  }

  var primesFound = 1;
  var currentNum = 2;

  while(currentNum <= rangeMax) {

    for(j = (currentNum + currentNum); j <= rangeMax; j += currentNum) {

      nums[j] = false;

    }
 
    currentNum++;

    while( (nums[currentNum] == false) && (currentNum < rangeMax) ) {

      currentNum++;

    }

    if(nums[currentNum] == true) {

      primesFound++;

      if(primesFound == 10001) {

        document.getElementById("outputBox").innerHTML = "The 10,001st prime is: " + currentNum;

      }

    }

  }

  if(primesFound < 10001) {

    document.getElementById("outputBox").innerHTML = "There are only " + primesFound + " in the given range.";

  }

}

main(100);
