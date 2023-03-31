#!/usr/bin/env node
import path from "path";
import fs from "fs";
import inquirer from "inquirer";
import { exec } from "child_process";

async function runCmd(command) {
  try {
    const { stdout, stderr } = await exec(command);
    let myString = `${stdout} ${stderr}`;
  } catch {
    (error) => {
      console.log(error);
    };
  }
}

async function hasYarn() {
  try {
    await execSync("yarnpkg --version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

// Validate arguments
if (process.argv.length < 3) {
  console.log("Please specify the target project directory.");
  console.log("For example:");
  console.log("    npx create-nodejs-app my-app");
  console.log("    OR");
  console.log("    npm init nodejs-app my-app");
  process.exit(1);
}

// Define constants
const ownPath = process.cwd();
const folderName = process.argv[2];
const appPath = path.join(ownPath, folderName);

// Check if directory already exists
try {
  fs.mkdirSync(appPath);
} catch (err) {
  if (err.code === "EEXIST") {
    console.log(
      "Directory already exists. Please choose another name for the project."
    );
  } else {
    console.log(error);
  }
  process.exit(1);
}

async function setup() {
  try {
    const { selectedRepository } = await inquirer.prompt([
      {
        type: "list",
        name: "selectedRepository",
        message: "select the databse you want to use ?",
        choices: [
          {
            name: "cassendra database",
            value:
              "https://github.com/coolveer/boilerplate-node-express-cassandra",
          },
          {
            name: "mongoDB database",
            value:
              "https://github.com/coolveer/boilerplate-node-express-mongodb",
          },
          {
            name: "Mysql database",
            value: "https://github.com/coolveer/boilerplate-node-express-mysql",
          },
        ],
      },
    ]);

    // Clone repo
    console.log(`Downloading files from repo ${selectedRepository}`);
    await runCmd(`git clone --depth 1 ${selectedRepository} ${folderName}`);
    console.log("Cloned successfully.");
    console.log("");

    // Change directory
    process.chdir(appPath);

    // Install dependencies
    const useYarn = await hasYarn();
    if (useYarn) {
      await runCmd("yarn install");
    } else {
      await runCmd("npm install");
    }
    console.log();
    console.log(
      "Enjoy your production-ready Node.js app, which already supports a large number of ready-made features! - please install all the dependencies"
    );
  } catch (error) {
    console.log(error);
  }
}

setup();
