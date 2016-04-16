"use strict";

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  var line1 = readLine();
  console.log('line1', line1);
  var line2 = readLine();
  console.log('line2', line2);
}

// run `npm run dev` and then enter 2 lines (hit enter for new line)
// and then Ctrl + D to end input
