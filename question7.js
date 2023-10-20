// write a function which can concatenate 2 arrays

let num1 = [1, 2];
let num2 = [4, 5];

//1
const concatArr = () => num1.concat(num2);
console.log(concatArr);

//2 - 3
const mergeArrays = (arr1, arr2) => {
  //   arr1.push(...arr2);
  //   return arr1;

  //return arr1.concat(...arr2);
  return [...arr1, ...arr2];
};

// but push mutedthe first array, so not a good option. use the concat.(concatanete does not mutate an array)
