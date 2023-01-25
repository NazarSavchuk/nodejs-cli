import * as fs from "node:fs";
import { pathAbsoluter } from "../lib/pathAbsoulter.js";
import { textRedColor } from "../lib/textRedColor.js";
import { existDirChecker } from "../lib/existDirChecker.js";

export const cp = (input) => {
  const inputArray = input.split(" ");
  inputArray.shift();
  if (inputArray.length > 2) {
    console.log(textRedColor("Too many arguments"));
  } else {
    const pathToFile = pathAbsoluter(inputArray[0]);
    const pathToDirectory = pathAbsoluter(inputArray[1]);
    const endPathArray = pathToFile.split("\\");
    if (
      existDirChecker(pathToDirectory) &&
      fs.existsSync(pathToFile) &&
      fs.lstatSync(pathToFile).isFile()
    ) {
      try {
        const r = fs.createReadStream(pathToFile, { encoding: "utf-8" });
        const w = fs.createWriteStream(
          `${pathToDirectory}\\${endPathArray[endPathArray.length - 1]}`
        );
        r.pipe(w);
        console.log("Copied successfully");
      } catch (error) {
        console.log(textRedColor("Copy operation failed"));
      }
    } else {
      console.log(textRedColor("Operation Failed"));
    }
  }
};
