'use strict';

const vowels = {
  a: 'a',
  e: 'e',
  i: 'i',
  o: 'o',
  u: 'u',
};

module.exports = function() {
  return function(string) {
    return string.split('').reduce((str, char) => {
      if (vowels[char.toLowerCase()]) char = char.toLowerCase();
      if (!vowels[char.toLowerCase()]) char = char.toUpperCase();
      return str.concat(char);
    }, '');
  };
};
