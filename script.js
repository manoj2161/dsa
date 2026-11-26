// const twoSum = (nums, target) => {
//   let sum = 0;
//   let arr = [...nums];
//   for (let i = 0; i < arr.length - 1; i++) {
//     sum = arr[i] + arr[i + 1];
//     if (sum === target) {
//       return [arr.indexOf(arr[i]),arr.indexOf(arr[i + 1])];
//     }
//   }
//   return sum;
// };

// // console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 3], 6));

// const isPalindrome = (x) => {
//   let num = x.toString();
//   let digits = num.split("");
//   console.log(digits);
//   const reversedDigits = [...digits].reverse();
//   if (reversedDigits.join("") === digits.join("")) {
//     console.log(digits.join(""), reversedDigits.join(""));
//     return "Palidrom";
//   } else {
//     console.log(digits.join(""), reversedDigits.join(""));
//     return "Not Palidrom";
//   }
// };

// console.log(isPalindrome(10));

// const romanToInt = (s) => {
//   let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//   const digit = s.split("");
//   console.log(digit[1]);
//   let sum = 0;
//   for (let i = 0; i < digit.length; i++) {
//     return console.log(`the roman value of ${roman.digit[1]}`);
//   }
//   return sum;
// };

// console.log(romanToInt("III"));

// const removeElement = (nums, val) => {
//   const output = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       output.push(nums[i]);
//     }
//   }
//   return output.length;
// };

// console.log(removeElement([3, 2, 2, 3], 3))

// const strStr = (haystack, needle) => {
//   let fArr = haystack;
//   let sArr = needle;
//   let char1 = fArr.split("");

//   let char2 = sArr.split("");

//   let joinChar2 = char2.join("");

//   let arr = [];
//   for (let i = 0; i < char1.length; i++) {
//     if (!char1.includes(char2[i])) {
//       return false;
//     }
//     if (char1.includes(char2[i])) {
//       console.log("Elements exists", char1.indexOf(char1[i]), char1[i]);
//     }
//   }
// };

// strStr("mississippi", "issip");

// const findMedianSortedArrays = (nums1, nums2) => {
//   let sortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
//   let roundOff = Math.floor((sortedArray.length + 1) / 2);
//   for (let i = roundOff - 1; i < roundOff; i++) {
//     if (sortedArray.length % 2 !== 0) {
//       medianSum = sortedArray[i];
//       console.log(medianSum);
//     } else {
//       medianSum = (sortedArray[i] + sortedArray[i + 1]) / 2;
//       console.log(medianSum);
//     }
//   }
// };

// findMedianSortedArrays(
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
// );

// const mergeTwoLists = (list1, list2) => {
//   let mergerdArray = [];
//   for (let i = 0; i < list1.length; i++) {
//     mergerdArray.push(list1[i]);
//   }
//   for (let i = 0; i < list2.length; i++) {
//     mergerdArray.push(list2[i]);
//   }
//   console.log(mergerdArray.sort());
// };

// mergeTwoLists([1, 2, 4], [1, 3, 4]);
// mergeTwoLists([], [0]);
// function arrayDiff(a, b) {
//   let filteredArray = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[0]) {
//       filteredArray.push(a[i]);
//     }
//   }
//   console.log(filteredArray);
// }

// arrayDiff([1, 1, 1, 2, 3], [1]);

// function validatePIN(pin) {
//   const str = pin.toString();
//   const arr = str.split("");
//   console.log(arr.length);
//   if (arr.length === 5) {
//     ("array length is wrong");
//   }
//   if (arr.length < 4 && arr.length > 6) {
//     return "array length is wrong";
//   } else {
//     return "Array length is fine";
//   }
// }

// console.log(validatePIN(1234567));

const longestCommonPrefix = (strs) => {
  let charStr = [];
  for (let i = 0; i < strs.length; i++) {
    charStr.push(strs[i].split(""));
  }
  console.log(charStr);
};

longestCommonPrefix(["flower", "flow", "flight"]);
