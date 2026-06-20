import inquirer from "inquirer";
import chalk from "chalk";
import { api } from "./api/index.js";
import { ui } from "./ui/index.js";

const res = await inquirer.prompt([
  {
    type: "input",
    name: "appName",
    message: "App Name?",
    default: "my-fst-app",
  },
  {
    type: "input",
    name: "description",
    message: `App description? `,
  },
  {
    type: "list",
    name: "appType",
    message: "App Type",
    choices: ["Full Stack App", "UI", "API"],
  },
  {
    type: "input",
    name: "author",
    message: "Author Name",
    default: "Lazy Coder",
  },
]);

console.log(chalk.bgBlack.green.bold.underline(`\t\t Hey ${res.author}!`));
console.log(
  chalk.bgGray.black.italic(`\t we are setting up your ${res.appName}!`),
);

switch (res.appType) {
  case "API":
    const deps = await inquirer.prompt([
      {
        type: "rawlist",
        name: "appDeps",
        message: `${res.appName} ${res.appType} Dependency`,
        choices: ["API", "API_1", "API_2"],
      },
    ]);
    api(deps.appDeps);
    break;
  case "UI":
    const uiDeps = await inquirer.prompt([
      {
        type: "rawlist",
        name: "appDeps",
        message: `${res.appName} ${res.appType} Dependency`,
        choices: ["UI", "UI_1", "UI_2"],
      },
    ]);
    ui(uiDeps.appDeps);
    break;
  default:
    console.log(
      chalk.redBright.bgYellow("Please choose correct app type Selection!"),
    );
}
