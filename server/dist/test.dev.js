"use strict";

var stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514];
var random_stuff = stuff[Math.floor(Math.random() * 14)];
console.log(random_stuff + "\n" + "\n" + "\n" + "\n");

for (i = 0; i < stuff.length; i++) {
  if (stuff[i] == random_stuff) {
    console.log("is a match");
    console.log(i);
    console.log(stuff[i]);
    console.log("Matched on element [".concat(i, "] : ").concat(random_stuff));
  } else {
    console.log("Not a match");
    console.log(stuff[i]);
    console.log("Didn't match on element [".concat(i, "]"));
  }
}