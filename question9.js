// Remove all duplicates in the array

const uniqueArr = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
};
