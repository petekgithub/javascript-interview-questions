/**
 * given an integer, determine if it is a power of 2.
 */
// To determine if an integer is a power of 2, you can use a simple bitwise operation.

function isPowerOfTwo(num) {
  return num > 0 && (num & (num - 1)) === 0;
}

function manipulateStudentRecord(obj, operation, prop, newValue) {
  if (operation === "delete") {
    const { [prop]: deletedProp, ...rest } = obj;
    return Object.assign({}, rest);
  } else if (operation === "edit") {
    return Object.assign({}, obj, { [prop]: newValue });
  } else {
    return obj;
  }
}
