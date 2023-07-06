/**
 * DESCRIPTION:
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

* Notes:
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1
 */

function strCount(str, letter) {
  //code here
  let array = [];
  let count = 0;

  array = str.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] === letter) {
      count += 1;
    }
  }
  return count;
}

// TEST
console.log(strCount('Hello', 'o')); // 1
console.log(strCount('Hello', 'l')); // 2
console.log(strCount('', 'z')); // 0
