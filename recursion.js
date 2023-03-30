/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) {
    return 1;
  }
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestWord = 0) {
  if (idx === words.length) {
    return longestWord;
  } else {
    if (words[idx].length > longestWord) {
      longestWord = words[idx].length;
    }
    return longest(words, idx + 1, longestWord);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, strEveryOther = '') {
  if (idx >= str.length) {
    return strEveryOther;
  } else {
    strEveryOther += str[idx];
    return everyOther(str, idx + 2, strEveryOther);
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }
  if (str.length === 2) return str[0] === str[1];

  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (arr[idx] === val) return idx;
  if (idx === arr.length) return -1;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, revStr = '', idx = 0) {
  if (revStr.length === str.length) return revStr;
  revStr += str[str.length - 1 - idx];

  return revString(str, revStr, idx + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') stringArr.push(obj[key]);
    if (typeof obj[key] === 'object')
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
