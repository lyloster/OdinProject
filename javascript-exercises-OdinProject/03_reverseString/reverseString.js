const reverseString = function(phrase) {
  //split in an array
  let phrase_split = Array.from(phrase);
  //reverse
  let reversed = phrase_split.reverse();
  //return
  return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
