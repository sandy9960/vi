// 1️⃣ Perform UNION operation
// Contains elements of both sets
function union(a, b) {
  let unionSet = new Set(a);
  for (let i of b) {
    unionSet.add(i);
  }
  return unionSet;
}

// two sets of fruits
const setA1 = new Set(['apple', 'mango', 'orange']);
const setB1 = new Set(['grapes', 'apple', 'banana']);
const unionResult = union(setA1, setB1);

console.log("Union of A and B:", unionResult);

// ------------------------------------------------------------

// 2️⃣ Perform INTERSECTION operation
// Elements of setA that are also in setB
function intersection(setA, setB) {
  let intersectionSet = new Set();
  for (let i of setB) {
    if (setA.has(i)) {
      intersectionSet.add(i);
    }
  }
  return intersectionSet;
}

const setA2 = new Set(['apple', 'mango', 'orange']);
const setB2 = new Set(['grapes', 'apple', 'banana']);
const intersectionResult = intersection(setA2, setB2);

console.log("Intersection of A and B:", intersectionResult);

// ------------------------------------------------------------

// 3️⃣ Perform SUBSET operation
// Returns true if all elements of setB are in setA
function subset(setA, setB) {
  for (let i of setB) {
    if (!setA.has(i)) {
      return false;
    }
  }
  return true;
}

const setA3 = new Set(['apple', 'mango', 'orange']);
const setB3 = new Set(['apple', 'orange']);
const subsetResult = subset(setA3, setB3);

console.log("Is B a subset of A?", subsetResult);