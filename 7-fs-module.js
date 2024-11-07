const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./Content/first.txt", "utf8");
const second = readFileSync("./Content/second.txt", "utf8");

writeFileSync(
  "./Content/result.txt",
  `here is the result : 1 : ${first} , ${second}`,
  { flag: "a" }
);

console.log("file written successfully");
