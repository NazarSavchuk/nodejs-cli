import * as os from "node:os";
import { userDirname } from "./userDirname.js";
export const pathAbsoluter = (PATH) => {
  let PATH_TO_HANDLE;
  if (String(PATH).startsWith(String(os.homedir()).substring(0, 3))) {
    PATH_TO_HANDLE = PATH;
  } else {
    if (String(PATH).startsWith("./")) {
      PATH_TO_HANDLE = `${userDirname()}${PATH.replace(/^.{2}/, "")}`;
    } else {
      PATH_TO_HANDLE = `${userDirname()}${PATH}`;
    }
  }
  return PATH_TO_HANDLE;
};
