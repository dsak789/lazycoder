import { subHeading, warning } from "../utils/LogPrinter.js";
import { createBasicReactApp } from "./basicReact/index.js";

export const ui = (params, appName) => {
  switch (params) {
    case "Basic React App":
      createBasicReactApp(appName);
      break;
    case "UI_2":
      ui_2();
      break;
    default:
      warning("Please make Correct UI Dependency Selection!");
  }
};
