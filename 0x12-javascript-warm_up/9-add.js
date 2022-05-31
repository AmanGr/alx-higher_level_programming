#!/usr/bin/node
const myArrayLen = process.argv.length;

if (myArrayLen === 2 || myArrayLen === 3) {
  console.log('NaN');
} else {
  add(parseInt(process.argv[2]), parseInt(process.argv[3]));
}

function add (a, b) {
  const sum = a + b;
  console.log(sum);
}
