import { userDirname } from "../lib/userDirname.js";

export const log = () => {
  setTimeout(() => {
    console.log(`Your current working directory is: ${userDirname()}`);
  }, 300);
};
