import { writeFile } from "node:fs";
import { pathAbsoluter } from "../lib/pathAbsoulter.js";
import { textGreenColor } from "../lib/textGreenColor.js";
import { textRedColor } from "../lib/textRedColor.js";

const data = "";

export const add = async (input) => {
  const inputArray = input.split(" ");
  inputArray.shift();
  const FILE_NAME = pathAbsoluter(inputArray.join(" "));
  writeFile(FILE_NAME, data, { flag: "wx" }, (err) => {
    if (err) {
      if (err.code === "EEXIST") {
        console.log(
          textRedColor(
            "Operation failed (Maybe file with the same name is already exist)"
          )
        );
      } else {
        console.log(err);
      }
    } else {
      console.log(textGreenColor("File has just created!"));
    }
  });
};
