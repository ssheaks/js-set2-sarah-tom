let str = "craft block argon meter bells brown croon droop";
let array = str.split(" ");

function crackingTheCode(word) {
    let decode = "";
    for (i = 0; i < array.length; i++) {
      if (word [0] === "a") {
        return word [1];
    } else if (word [0] === "b") {
        return word [2];
    } else if (word [0] === 'c') {
        return word [3];
    } else if (word [0] === 'd') {
        return word [4];
    } else {
        return " ";
    }      
  } return decode;
}

crackingTheCode(array);

console.log(decode);

