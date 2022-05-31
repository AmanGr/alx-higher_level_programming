#!/usr/bin/node
const inputArray = process.argv;

if (process.argv.length === 2 || process.argv.length === 3) {
  console.log(0);
} else {
  const newArray = inputArray.slice(2);

  let i;

  for (i = 0; i < newArray.length; i++) {
    newArray[i] = parseInt(newArray[i]);
  }

  const firstLargest = Math.max(...newArray);
  const index = newArray.indexOf(firstLargest);

  newArray.splice(index, 1);
  const secondLargest = Math.max(...newArray);
  console.log(secondLargest);
}
