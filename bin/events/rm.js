import * as fs from "node:fs";
import { pathAbsoluter } from "../lib/pathAbsoulter.js";
import { textGreenColor } from "../lib/textGreenColor.js";
import { textRedColor } from "../lib/textRedColor.js";

export const rm = (input) => {
  const inputArray = input.split(" ");
  inputArray.shift();
  const pathToDelete = pathAbsoluter(inputArray[0]);
  fs.unlink(pathToDelete, (err) => {
    if (err) {
      console.log(textRedColor("Operation Failed"));
    } else {
      console.log(textGreenColor("Deleted Successfully"));
    }
  });
};
