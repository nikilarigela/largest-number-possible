exports.generateLarge = function(array) {
  let regex = /,/gi;

  if (validate(array)) {
    let largestPossible = array
      .sort(gen)
      .join("")
      .replace(regex);
    return largestPossible;
  } else {
    return 0;
  }
};

function gen(a, b) {
 return "" + b + a - ("" + a + b);
}

function validate(array) {
  return !array.some(isNaN) && !array.some(each => each < 0);
}

