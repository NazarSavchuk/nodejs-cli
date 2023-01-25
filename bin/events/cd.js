import * as fs from "node:fs";
import * as os from "node:os";
import { existDirChecker } from "../lib/existDirChecker.js";
import { textRedColor } from "../lib/textRedColor.js";
import { userDirname } from "../lib/userDirname.js";
export const cd = async (input) => {
  const inputArray = input.split(" ");
  inputArray.shift();
  const PATH_TO_DIR = inputArray.join(" ");
  if (PATH_TO_DIR.startsWith(String(os.homedir()).substring(0, 3))) {
    if (existDirChecker(PATH_TO_DIR)) {
      userDirname(3, PATH_TO_DIR);
    } else {
      console.log(
        textRedColor("Next folder doesn't exist or it isn't a folder"),
        `"${PATH_TO_DIR}"`
      );
    }
  } else {
    if (PATH_TO_DIR.startsWith("./")) {
      let temp = PATH_TO_DIR.replace(/^.{2}/, "");
      let DIR_PATH = `${userDirname()}${temp}`;
      if (existDirChecker(DIR_PATH)) {
        userDirname(2, DIR_PATH);
      } else {
        console.log(
          textRedColor("Next folder doesn't exist or it isn't a folder"),
          `"${PATH_TO_DIR}"`
        );
      }
    } else {
      let DIR_PATH = `${userDirname()}${PATH_TO_DIR}`;
      if (existDirChecker(DIR_PATH)) {
        userDirname(2, DIR_PATH);
      } else {
        console.log(
          textRedColor("Next folder doesn't exist or it isn't a folder"),
          `"${PATH_TO_DIR}"`
        );
      }
    }
  }
};
