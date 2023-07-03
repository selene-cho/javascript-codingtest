function findAverage(array) {
  // your code here
  let sum = 0;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    let average = sum / array.length;
    return average;
  }
  return 0;
}

// TEST
console.log(findAverage([1, 1, 1])); // 1
console.log(findAverage([1, 2, 3])); // 2
console.log(findAverage([1, 2, 3, 4])); // 2.5
