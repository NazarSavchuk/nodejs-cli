import * as os from "node:os";

let currentUserDirname = `${os.homedir()}\\`;

export const userDirname = (arg, DIR_PATH) => {
  if (arg === 1) {
    const temp = currentUserDirname.split("\\");
    if (temp.length > 2) {
      temp.length = temp.length - 2;
      currentUserDirname = `${temp.join("\\")}\\`;
    }
  }
  if (arg === 2) {
    currentUserDirname = `${currentUserDirname}${DIR_PATH.replace(
      `${currentUserDirname}`,
      ""
    )}${String(DIR_PATH).endsWith("\\") ? "" : "\\"}`;
  }
  if (arg === 3) {
    currentUserDirname = `${DIR_PATH}\\${
      String(DIR_PATH).endsWith("\\") ? "" : "\\"
    }`;
  }
  return currentUserDirname;
};
