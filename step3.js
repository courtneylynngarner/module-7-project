function findLongestWord(arr) {
  let wordSize = 0;

  for (let i = 0; i < arr.length; i++) {
    if (wordSize < arr[i].length) {
      wordSize = arr[i].length;
    }
  }
  return wordSize;
}
console.log(findLongestWord(["Mia", "Loves", "Painting", "butterflies"]));
