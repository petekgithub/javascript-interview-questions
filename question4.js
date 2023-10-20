// Closures
// Create a counter function which has increment and getValue functionality

//1
function counter() {
  let count = 0;
  function increment() {
    count += 1;
  }
  function getValue() {
    return count;
  }

  return {
    increment,
    getValue,
  };
}

const myCounter = counter();

myCounter.increment();
myCounter.getValue();
console.log(myCounter.getValue()); // Outputs 2

//2
const privateCounter = () => {
  let count = 0;
  return {
    increment: (val = 1) => {
      count += val;
    },
    getValue: () => {
      return count;
    },
  };
};

const counter = privateCounter();
console.log(counter.getValue());
