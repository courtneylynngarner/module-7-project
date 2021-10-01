const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start(); // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();

console.log("Results for largeArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

/*
tinyArray Runtime: 
insert 60.708 μs
append 101.917 μs


smallArray Runtime:
insert 41.833 μs
append 100.833 μs


mediumArray Runtime:
insert 222.25 μs
append 169.375 μs


largeArray Runtime:
nsert 10.381459 ms
append 842 μs


extraLargeArray Runtime:
insert 1.078537459 s
append 7.480583 ms


Push() in the append arrays puts the new number at the end of the new array. Unshift () puts the new 
number at the beginning of the new array, and then loops through and changes the index of every other 
number in that array. Unshift() in the insert function seems to run much faster in the very beginning 
with the tinyArray and the smallArray being 40-60 microseconds faster than the append function which 
uses Push(). Quickly we see though that this becomes inefficient by our mediumArray; which holds 1,000 
numbers compared to the 10 or 100 of the tinyArray and smallArray. Here, append becomes 30 microseconds
faster than the insert function; and by the time we reach the extraLargeArray, insert takes a full second,
while append takes a mere 7.4 ms using push(). Push() would be much more efficient in most cases where a 
large amount of data is used.
*/
