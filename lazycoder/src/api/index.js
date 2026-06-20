import chalk from "chalk";

const api_1 = () => console.log(chalk.bold.greenBright("API Preset 1"));
const api_2 = () => console.log(chalk.bold.greenBright("API Preset 2"));

export const api = (params) => {
  console.log(params);
  switch (params) {
    case "API_1":
      api_1();
      break;
    case "API_2":
      api_2();
      break;
    default:
      console.log(
        chalk.redBright.bgYellow(
          "Please make Correct  API Dependency Selection!",
        ),
      );
  }
};
