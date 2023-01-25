import * as fs from "node:fs";
import { createHash } from "node:crypto";
import { pathAbsoluter } from "../lib/pathAbsoulter.js";
import { textRedColor } from "../lib/textRedColor.js";

export const hash = async (input) => {
  const inputArray = input.split(" ");
  if (inputArray.length > 1) {
    const pathToHash = pathAbsoluter(inputArray[1]);
    fs.readFile(pathToHash, "utf8", (err, data) => {
      if (err) {
        console.log(textRedColor("Operation Failed"));
      } else {
        if (data) {
          console.log(createHash("sha256").update(data).digest("hex"));
        } else {
          console.log("File is empty :)");
        }
      }
    });
  }
};
