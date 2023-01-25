import { EOL, cpus, homedir, userInfo, arch } from "os";

export const eol = () => {
  console.log("EOL:", JSON.stringify(EOL));
};
export const proc = () => {
  const processors = cpus();
  processors.forEach((processor) => {
    console.log({
      model: processor.model,
      speed: `${processor.speed / 1000} Ghz`,
    });
  });
};
export const homeDirectory = () => {
  console.log("HomeDir: ", homedir());
};
export const systemUserName = () => {
  console.log("Your current User Name:", userInfo().username);
};

export const architecture = () => {
  console.log(arch(), "-bit extended system");
};
