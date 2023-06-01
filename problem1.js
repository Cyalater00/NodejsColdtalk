const { readFileSync, writeFileSync } = require("fs"); // reads the coontents of two flies then displays the contents of theses files on the console.

const fs = require("fs");

const first = readFileSync("./content/first.txt", "utf8"); // 
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);// this is used to display the contents of both files 

writeFileSync( // is used to write a string to the "result-sync.txt" file. 
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`
);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }// provideds the third argument,
); 

// the code reads files, displays their contents, and writes the contents to a new file.