const fs = require("fs");

function readFile(fileName, finalValue) {
  fs.readFile(fileName, "utf-8", function (err, data) {
    if (err) {
      finalValue(err); // Handle error properly
      return;
    }
    finalValue(null, data);
  });
}

function readTheFile(fileName) {
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

const p = readTheFile("a.txt");
p.then((contents) => {
  console.log(contents);
}).catch((err) => {
  console.error("Error reading file:", err);
});
