w = 3; // assign 3 to w
elem = document.getElementById("num");
elem.innerHTML = w;
var w; // declare w

function utilizePrefixer(prefix) {
  return function (word) {
    return `${prefix}${word}`;
  };
}

function outerRun() {
  let name = "hello";

  function innerRun() {
    alert[name];
  }
  innerRun();
}
