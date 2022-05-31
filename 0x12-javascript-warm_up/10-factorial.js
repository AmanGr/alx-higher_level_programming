#!/usr/bin/node

const num = parseInt(process.argv[2]);

if (isNaN(num) || num === 0) {
  console.log(1);
} else {
  console.log(fact(num));
}

function fact (n) {
  if (n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
