'use strict';
function numDays(month) {
  switch (month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return 31;
    break;

  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return 30;
    break;

  case 'February':
    return 28;
    break;
  }
}

console.log(numDays('June'));