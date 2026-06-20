import chalk from "chalk";

const ui_1 = () => console.log(chalk.bold.green("UI Preset 1"));
const ui_2 = () => console.log(chalk.bold.green("UI Preset 2"));

export const ui = (params) => {
  console.log(params);
  switch (params) {
    case "UI_1":
      ui_1();
      break;
    case "UI_2":
      ui_2();
      break;
    default:
      console.log(
        chalk.redBright.bgYellow(
          "Please make Correct UI Dependency Selection!",
        ),
      );
  }
};
