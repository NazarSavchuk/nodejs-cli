import { userDirname } from "./lib/userDirname.js";
import { textGreenColor } from "./lib/textGreenColor.js";
import { lineReader } from "./lineReader.js";

const START_COMMAND = process.argv.slice(2);
let USERNAME = "Hacker";

if (START_COMMAND) {
  if (START_COMMAND.includes("--username=")) {
    USERNAME = START_COMMAND[0].replace("--username=", "");
  } else {
    USERNAME = START_COMMAND;
  }
}
const yourCurrentDirname = userDirname();

console.log(textGreenColor(`Welcome to the File Manager, ${USERNAME}`));
console.log(`Your current directory is: ${yourCurrentDirname}`);

lineReader(USERNAME);
