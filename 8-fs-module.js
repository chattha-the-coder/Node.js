const { readFile, writeFile } = require("fs");

readFile("./Content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const fff = result;

  readFile("./Content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const sss = result;
    writeFile(
      "./Content/result.txt",
      `here is the result : ${fff} , ${sss}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
