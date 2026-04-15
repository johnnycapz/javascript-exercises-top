const sumAll = function(start, end) {
    let numsToSum = [];
    let i = start;
    let j = end;

    if (i < 0 || (!Number.isInteger(i)) || isNaN(i) || j < 0 || (!Number.isInteger(j)) || isNaN(j)) {
        return "ERROR";
    }
    else if (i<j) {
    while (i <= j) {
      console.log(i);
      numsToSum.push(i);
      ++i;
    }
    return numsToSum.reduce(sum) //sum needs separate call back function. 
    } else {
      while (j <= i) {
      console.log(j);
      numsToSum.push(j);
      ++j;
      }
    return numsToSum.reduce(sum) //sum needs separate call back function. 
    }

    console.log(numsToSum);

    function sum(previous, next) { //adds previous item to next item togther
      return previous + next;
    }
 };


// Do not edit below this line
module.exports = sumAll;
