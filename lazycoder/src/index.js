#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { api } from "./api/index.js";
import { ui } from "./ui/index.js";
import {
  bigHeading,
  bigHeading3D,
  deployBanner,
  heading,
  warning,
  welcome,
} from "./utils/LogPrinter.js";
import { prompt } from "./utils/Prompter.js";

bigHeading3D("Lazy Coder");

const authorName = await prompt("authorName", "Author Name");
welcome(authorName);
const appType = await prompt("appType", "App Type", "list", [
  "Full Stack Application",
  "UI",
  "API",
]);
const appPreset = await prompt(
  "appPreset",
  "App Preset",
  "list",
  ["Basic", "Minimal", "Routed", "Authicated"],
  "",
  "",
  () => appType === "Full Stack Application",
);
const uiPreset = await prompt(
  "uiPreset",
  "UI Preset",
  "list",
  ["Basic React App", "Weather App", "Routed Preset", "Authentication Preset"],
  "",
  "",
  () => appType === "UI",
);
const apiPreset = await prompt(
  "uiPreset",
  "UI Preset",
  "list",
  ["Basic API Server", "Weather API", "Routed Endpoints", "Authentication API"],
  "",
  "",
  () => appType === "API",
);

const appName = await prompt("appName", `App Name`);

const preset = {
  "Full Stack Application": appPreset,
  UI: uiPreset,
  API: apiPreset,
};


heading(`Setting up your ${appType} ${appName.toUpperCase()}...!`);
switch (appType) {
  case "Full Stack Application":
    chalk.bold(
      warning("Sorry for the Inconvinience Preset is not ready to use"),
    );
    break;
  case "UI":
    ui(preset[appType], appName);
    break;
  case "API":
    api(preset[appType], appName);
    break;
}
