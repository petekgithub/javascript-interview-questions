// Adding elements to the array
// Write a function which get's an array and an element and returns an array with this element at the time.

const nums = [5, 6];

const append = (arr, el) => {
  //   arr.push(el);
  //   return arr;
  return [...arr, el];
};
console.log(append([1, 2], 4));
console.log(append(numbs, 4));

// arr.push() -> modifies old array, doesn't create a new array
// in here, using.push is not safe, using spread operator make sense
