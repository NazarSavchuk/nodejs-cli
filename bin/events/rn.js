import { rename, access, constants } from "node:fs";
import { pathAbsoluter } from "../lib/pathAbsoulter.js";
import { textGreenColor } from "../lib/textGreenColor.js";
import { textRedColor } from "../lib/textRedColor.js";

export const rn = async (input) => {
  const inputArray = input.split(" ");
  inputArray.shift();
  if (inputArray.length > 2) {
    console.log(textRedColor("Too many arguments"));
  } else {
    const wrongFilename = pathAbsoluter(inputArray[0]);
    const properFilename = pathAbsoluter(inputArray[1]);
    access(properFilename, constants.F_OK, (err) => {
      if (err) {
        rename(wrongFilename, properFilename, (err) => {
          if (err) {
            console.log(textRedColor("Operation Failed"));
          } else {
            console.log(textGreenColor("Renamed Successfully"));
          }
        });
      } else {
        console.log(
          textRedColor("Operation Failed (Maybe, file is already exist)")
        );
      }
    });
  }
};
