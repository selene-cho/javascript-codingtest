/**
 * Numbers ending with zeros are boring.
 * They might be fun in your world, but not here.
 * Get rid of them. Only the ending ones.
 * Zero alone is fine, don't worry about it. Poor guy anyway
 */

function noBoringZeros(n) {
  // your code
  if (n !== 0) {
    let arr = String(n).split('');
    const FirstArrLength = arr.length;
    let i = 0;

    while (i < FirstArrLength) {
      if (arr[arr.length - 1] === '0') {
        arr.pop();
        i++;
      } else {
        break;
      }
    }
    return Number(arr.join(''));
  }
  return 0;
}

// TEST
console.log(noBoringZeros(1450)); // 145
console.log(noBoringZeros(960000)); // 96
console.log(noBoringZeros(1050)); // 105
console.log(noBoringZeros(-1050)); // -105
console.log(noBoringZeros(-105)); // -105
console.log(noBoringZeros(0)); // 0
