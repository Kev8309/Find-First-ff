//node ff.js PATTERN FILENAME NUMBER_OF_LINES

//Add dependencies 'path' and 'fs'
const path = require('path');
const fs = require('fs');

//Verify the correct invocation of the script
if (process.argv.length !== 5){
  console.log(`Usage: node ${path.basename(__filename)} PATTERN FILENAME NUMBER_OF_LINES`);
  return;
};

//Extract the values from the command-line arguments
let pattern = process.argv[2];
let filename = process.argv[3];
let nlines = Number(process.argv[4]);

//Verify that the file provided exists in the current working directory.
if (!fs.existsSync(filename)){
  console.log(`${filename}: no such file or directory exists`);
  return;
};

//Verify that the number passed as an argument is a number
if (isNaN(nlines)){
  console.log(`Number of lines must be an integer`);
  return;
}

//Extract the contents of the file
let content = fs.readFileSync(filename, 'utf-8');
let lines = content.split('\n');

//Search n number of lines for a matching pattern, then print those lines.
let limit = lines.length >= nlines ? nlines: lines.length;

for (let i = 0; i < limit; i++){
  if (lines[i].includes(pattern)){
    console.log(lines[i]);
  };
};
