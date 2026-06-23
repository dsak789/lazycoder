import chalk from "chalk";
import { createBasicApiServer } from "./basicApi/index.js";
import { warning } from "../utils/LogPrinter.js";

const api_1 = () => console.log(chalk.bold.greenBright("API Preset 1"));
const api_2 = () => console.log(chalk.bold.greenBright("API Preset 2"));

export const api = (params, appName) => {
  console.log("params", params);
  switch (params) {
    case "Basic API Server":
      createBasicApiServer(appName);
      break;
    case "API_2":
      api_2();
      break;
    default:
      warning("Please make Correct UI Dependency Selection!");
  }
};
