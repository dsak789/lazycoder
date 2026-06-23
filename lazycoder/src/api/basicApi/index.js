import { code, heading, subHeading, success } from "../../utils/LogPrinter.js";
import { prompt } from "../../utils/Prompter.js";
import { execSync } from "child_process";
import fs from "fs";

const dirs = [
  "src/Models",
  "src/Controllers",
  "src/Data",
  "src/APIs",
  "src/Routes",
];

const createDirs = (folders) => {
  folders.forEach((folder) => {
    fs.mkdirSync(folder, { recursive: true });
  });
};

const indexData = `
import express from "express";
import cors  from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API Server Running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log('🚀 Server running on port ${PORT}');
});
`;

const createFile = (fileName, data) => {
  fs.writeFileSync(fileName, data.trim());
};

const alterPackageJson = () => {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

  packageJson.scripts = {
    start: "node src/index.js",
    dev: "nodemon src/index.js",
  };

  fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
};

const createBasicApiServer = (appName) => {
  subHeading(`Creating API server in ${process.cwd()}/${appName}`);
  execSync(`npm init`, { stdio: "inherit" });
  execSync(`npm i express cors`, { stdio: "inherit" });
  execSync(`npm i nodemon -D`, { stdio: "inherit" });
  createDirs(dirs);
  createFile("index.js", indexData);
  success(`${appName} created successfully.`);
  alterPackageJson();
  code("Happy Hacking");
  code("use npm start or npm run dev to start api");
  execSync(`npm run dev `, { stdio: "inherit" });
};
export { createBasicApiServer };
