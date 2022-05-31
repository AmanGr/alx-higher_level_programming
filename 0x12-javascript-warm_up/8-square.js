#!/usr/bin/node
const myVar = parseInt(process.argv[2]);
let stringSquare = '';

if (isNaN(myVar)) {
  console.log('Missing size');
} else if (myVar > 0) {
  let i;
  let j;
  for (i = 0; i < myVar; i++) {
    for (j = 0; j < myVar; j++) {
      stringSquare += 'X';
    }
    if (i !== myVar - 1) {
      stringSquare += '\n';
    }
  }
  console.log(stringSquare);
}
