import * as fs from "node:fs";
export const existDirChecker = (PATH_TO_DIR) => {
  if (fs.existsSync(PATH_TO_DIR) && fs.lstatSync(PATH_TO_DIR).isDirectory())
    return true;
};
