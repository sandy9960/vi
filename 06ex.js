// 1️⃣ Program to remove an item from an array
function removeItemFromArray(array, n) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== n) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const result1 = removeItemFromArray([1, 2, 3, 4, 5], 2);
console.log("After removing 2:", result1); // [1, 3, 4, 5]

// ------------------------------------------------------------

// 2️⃣ Program to check if an array contains a specified value
const words = ['you', 'will', 'learn', 'javascript'];
const hasValue = words.includes('javascript'); // check condition

if (hasValue) {
  console.log('Array contains the value "javascript".');
} else {
  console.log('Array does not contain the value "javascript".');
}

// ------------------------------------------------------------

// 3️⃣ Program to empty an array
function emptyArray(arr) {
  // Method 1: assign to new empty array
  arr = [];
  return arr;
}

const numbers = [1, 2, 3];
console.log("Original array:", numbers);

// call the function
const result2 = emptyArray(numbers);
console.log("After emptying:", result2); // []