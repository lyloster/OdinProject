const repeatString = function(word, repeats) {
  if (repeats < 0) {
    return "ERROR";
  } else if (repeats === 0) {
    return "";
  } else {
    let repeated = word;
    for (let i = 1; i < repeats; ++i) {
      repeated += word;
    }
    return repeated;
  }
};

// Do not edit below this line
module.exports = repeatString;
