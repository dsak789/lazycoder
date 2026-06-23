import chalk from "chalk";
import figlet from "figlet";
import cfonts from "cfonts";
import ora from "ora";

const bigHeading = (appName) => {
  cfonts.say(appName, {
    font: "chrome",
    gradient: ["cyan", "blue"],
  });
};

const welcome = (title) => {
  console.log(
    "\n\n" +
      chalk.bold.magentaBright(
        figlet.textSync(`Hey ${title}! `, {
          font: "mini",
        }),
      ) +
      "\n" +
      chalk.cyanBright(
        figlet.textSync(`Welcome to Coding World!!`, {
          font: "contessa",
        }),
      ),
    "\n\n",
  );
};

const bigHeading3D = (appName) => {
  cfonts.say(appName, { font: "3d", colors: ["green", "black"] });
};

const heading = (title) => {
  console.log(
    "\n" +
      chalk.bold.blue(
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ),
  );
  console.log(chalk.bold.white(`  ${title}`));
  console.log(
    chalk.bold.blue(
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ),
  );
};

const subHeading = (title) => {
  console.log(chalk.bold.cyan(`➜ ${title}`));
};

const author = (name) => {
  console.log(chalk.gray(`Created by ${name}`));
};
const text = (msg) => {
  console.log(chalk.white(msg));
};
const muted = (msg) => {
  console.log(chalk.gray(msg));
};
const success = (msg) => {
  console.log(chalk.green(`✔ ${msg}`));
};
const error = (msg) => {
  console.log(chalk.redBright(`✖ ${msg}`));
};

const warning = (msg) => {
  console.log(chalk.yellow(`⚠ ${msg}`));
};
const info = (msg) => {
  console.log(chalk.blue(`ℹ ${msg}`));
};
const step = (stepNo, msg) => {
  console.log(chalk.magenta(`[${stepNo}] ${msg}`));
};

const highlight = (msg) => {
  console.log(chalk.black.bgYellow.bold(` ${msg} `));
};

const code = (msg) => {
  console.log(chalk.greenBright(`> ${msg}`));
};

const loading = (msg) => {
  return ora({
    text: chalk.cyan(msg),
    spinner: "dots",
    color: "cyan",
  }).start();
};
//Usage
// const spinner = loading("Building");

// await build();

// spinner.succeed(chalk.green("Build Completed"));

const option = (index, label) => {
  console.log(chalk.cyan(`[${index}]`) + " " + chalk.white(label));
};
const environment = (env) => {
  const map = {
    DEV: chalk.black.bgGreen,
    STAGE: chalk.black.bgYellow,
    PROD: chalk.white.bgRed,
  };

  console.log(map[env](` ${env} `));
};
const status = (status) => {
  const styles = {
    RUNNING: chalk.black.bgGreen,
    STOPPED: chalk.white.bgRed,
    PENDING: chalk.black.bgYellow,
  };

  console.log(styles[status](` ${status} `));
};

const rainbowBanner = (text) => {
  cfonts.say(text, {
    font: "block",
    gradient: ["red", "yellow", "green"],
    align: "center",
  });
};

const hackerBanner = (text) => {
  cfonts.say(text, {
    font: "block",
    colors: ["green"],
    background: "black",
    align: "center",
  });
};

const deployBanner = () => {
  cfonts.say("DEPLOY", {
    font: "3d",
    gradient: ["cyan", "blue"],
    align: "center",
  });
};

export {
  welcome,
  bigHeading,
  bigHeading3D,
  heading,
  subHeading,
  author,
  text,
  muted,
  success,
  error,
  warning,
  info,
  step,
  highlight,
  code,
  loading,
  option,
  environment,
  status,
  rainbowBanner,
  hackerBanner,
  deployBanner,
};

//Usage
// bigHeading3D("lazy Coder");
// welcome("Hey Mr.");
// bigHeading("ANY SHARE");

// author("Ajith Kumar");

// heading("Deployment");

// info("Checking Server");

// success("SSH Connected");

// warning(" Production Environment");

// const spinner = loading("Uploading Build");

// await new Promise((resolve) => {
//   setTimeout(resolve, 3000);
// });

// spinner.succeed(chalk.green("Upload Complete"));

// success("Deployment Successful");

// const fonts = await figlet.fonts();

// for (const font of fonts.slice(0, 0)) {
//   console.log(`\n=== ${font} ===\n`);

//   await new Promise((resolve) => {
//     setTimeout(resolve, 750);
//   });

//   console.log(
//     figlet.textSync("Welcome coder", {
//       font,
//     }),
//   );
// }
