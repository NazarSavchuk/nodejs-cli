import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
import { EventEmitter } from "node:events";
import { textGreenColor } from "./lib/textGreenColor.js";
import { cat } from "./events/cat.js";
import { ls } from "./events/ls.js";
import { userDirname } from "./lib/userDirname.js";
import { log } from "./events/log.js";
import { add } from "./events/add.js";
import { rn } from "./events/rn.js";
import { cp } from "./events/cp.js";
import { mv } from "./events/mv.js";
import { rm } from "./events/rm.js";
import { cd } from "./events/cd.js";
import {
  eol,
  proc,
  homeDirectory,
  systemUserName,
  architecture,
} from "./events/os/os.js";
import { hash } from "./events/hash.js";
import { compress, decompress } from "./events/zip.js";
const rl = readline.createInterface({ input, output });

const eventEmitter = new EventEmitter();
eventEmitter.setMaxListeners(0);

const GOODBYE = textGreenColor("Thank you for using File Manager");

export const lineReader = () => {
  eventEmitter.on("ls", () => ls());
  eventEmitter.on("log", () => log());
  eventEmitter.on("up", () => userDirname(1));
  eventEmitter.on("os --EOL", () => eol());
  eventEmitter.on("os --cpus", () => proc());
  eventEmitter.on("os --homedir", () => homeDirectory());
  eventEmitter.on("os --username", () => systemUserName());
  eventEmitter.on("os --architecture", () => architecture());

  rl.on("line", (input) => {
    if (String(input).startsWith("cd")) {
      cd(input);
    }
    if (String(input).startsWith("rn")) {
      rn(input);
    }
    if (String(input).startsWith("cp")) {
      cp(input);
    }
    if (String(input).startsWith("cat")) {
      cat(input);
    }
    if (String(input).startsWith("add")) {
      add(input);
    }
    if (String(input).startsWith("mv")) {
      mv(input);
    }
    if (String(input).startsWith("rm")) {
      rm(input);
    }
    if (String(input).startsWith("hash")) {
      hash(input);
    }
    if (String(input).startsWith("compress")) {
      compress(input);
    }
    if (String(input).startsWith("decompress")) {
      decompress(input);
    }
    switch (input) {
      case "os --EOL":
        eventEmitter.emit("os --EOL");
        break;
      case "os --cpus":
        eventEmitter.emit("os --cpus");
        break;
      case "os --homedir":
        eventEmitter.emit("os --homedir");
        break;
      case "os --username":
        eventEmitter.emit("os --username");
      case "os --architecture":
        eventEmitter.emit("os --architecture");
        break;
      case "ls":
        eventEmitter.emit("ls");
        break;
      case "up":
        eventEmitter.emit("up");
        break;
      case ".exit":
        console.log(GOODBYE);
        process.exit();
        break;
    }
    if (input) {
      eventEmitter.emit("log");
    }
  }).on("SIGINT", () => {
    console.log(GOODBYE);
    process.exit();
  });
};
