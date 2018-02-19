'use strict';

function crackingTheCode(message) {
  let result = '';
  let array = message.split(' ');
  for (i = 0; i < array.length; i++) {
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