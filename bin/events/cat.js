import * as fs from "node:fs";
import { pathAbsoluter } from "../lib/pathAbsoulter.js";
import { textRedColor } from "../lib/textRedColor.js";

export const cat = (input) => {
  const inputArray = input.split(" ");
  inputArray.shift();
  const PATH_TO_READ = pathAbsoluter(inputArray.join(" "));

  if (fs.existsSync(PATH_TO_READ) && fs.lstatSync(PATH_TO_READ).isFile()) {
    const readStream = fs.createReadStream(PATH_TO_READ, "utf-8");
    readStream.on("data", (chunk) => {
      process.stdout.write(`${chunk}\n`);
    });
  } else {
    console.log(
      `${textRedColor(
        "Next folder doesn't exist or it isn't a file:"
      )}${PATH_TO_READ}`
    );
  }
};
