import * as fs from "node:fs";
import * as zlib from "node:zlib";
import { pathAbsoluter } from "../lib/pathAbsoulter.js";
import { textGreenColor } from "../lib/textGreenColor.js";
import { textRedColor } from "../lib/textRedColor.js";

export const compress = (input) => {
  const inputArray = input.split(" ");
  inputArray.shift();
  if (inputArray.length == 2) {
    const inputFilePath = pathAbsoluter(inputArray[0]);
    const outputFilePath = pathAbsoluter(inputArray[1]);
    try {
      const r = fs.createReadStream(inputFilePath);
      const brotli = zlib.createBrotliCompress();
      const w = fs.createWriteStream(outputFilePath);
      r.pipe(brotli).pipe(w);
      console.log(textGreenColor("Compressed Successfully"));
    } catch (error) {
      console.log(textRedColor("Operation Failed"));
    }
  } else {
    console.log(textRedColor("Don't proper count of arguments"));
  }
};
export const decompress = (input) => {
  const inputArray = input.split(" ");
  inputArray.shift();
  if (inputArray.length == 2) {
    const inputFilePath = pathAbsoluter(inputArray[0]);
    const outputFilePath = pathAbsoluter(inputArray[1]);
    try {
      const r = fs.createReadStream(inputFilePath);
      const brotli = zlib.createBrotliDecompress();
      const w = fs.createWriteStream(outputFilePath);
      r.pipe(brotli).pipe(w);
      console.log(textGreenColor("Decompressed Successfully"));
    } catch (error) {
      console.log(textRedColor("Operation Failed"));
    }
  } else {
    console.log(textRedColor("Don't proper count of arguments"));
  }
};
