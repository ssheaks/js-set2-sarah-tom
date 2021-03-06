'use strict';

function crackingTheCode(message) {
  let result = '';
  let array = message.split(' ');
  for (let i = 0; i < array.length; i++) {
    if (array[i] [0] === 'a') {
      result += array[i][1];
    } else if (array[i][0] === 'b') {
      result +=  array[i][2];
    } else if (array[i][0] === 'c') {
      result += array[i][3];
    } else if (array[i][0] === 'd') {
      result += array[i][4];
    } else {
      result += ' ';
    }      
  } return result;
}
  
console.log(crackingTheCode('craft block argon meter bells brown croon droop'));

//condensed version
const decode = function (word) {
  if (word[0].charCodeAt() > 100) return ' ';
  return word[word[0].charCodeAt() - 96];
};

const decodeWords = function (words) {
  return words
    .split(' ')
    .map(decode)
    .join('');
};

console.log(decodeWords('craft block argon meter bells brown croon droop'));