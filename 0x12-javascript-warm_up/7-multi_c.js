#!/usr/bin/node
const myVar = parseInt(process.argv[2]);

if (isNaN(myVar)) {
  console.log('Missing number of occurrences');
} else {
  let i;
  for (i = 0; i < myVar; i++) {
    console.log('C is fun');
  }
}
