import * as fs from "node:fs";
import path, { extname } from "node:path";
import { userDirname } from "../lib/userDirname.js";

export const ls = () => {
  const filesArray = [];
  const dirArray = [];
  fs.readdir(userDirname(), { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      files.forEach((file) => {
        let extension;
        if (path.extname(file.name) == "") {
          extension = "directory";
          dirArray.push({
            Name: file.name,
            Type: extension,
          });
        } else {
          extension = "file";
          filesArray.push({
            Name: file.name,
            Type: extension,
          });
        }
      });
      console.table(dirArray.concat(filesArray));
    }
  });
};
