import { code, heading, subHeading, success } from "../../utils/LogPrinter.js";
import { prompt } from "../../utils/Prompter.js";
import { execSync } from "child_process";
const createBasicReactApp = (appName) => {
  subHeading(`Creating Basic React App in ${process.cwd()}/${appName}`);
  execSync(`npx create-react-app ${appName}`, { stdio: "inherit" });
  success(`${appName} created successfully.`);
  code(`use cd ${appName} && npm start`);
  success("Happy Hacking");
};
export { createBasicReactApp };
