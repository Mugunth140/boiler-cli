#!/usr/bin/env node

import chalk from "chalk";
import path from "path";
import prompts from "prompts";
import { installFeatures } from "./src/features.js";
import { checkGit, cloneRepo, initGit, installDependencies } from "./src/git.js";
import { P } from "./src/theme.js";
import { displayThankYou, displayTitle, getChoices, getFeatureChoices, sectionHeader } from "./src/ui.js";
import { sleep } from "./src/utils.js";

const onCancel = () => {
  console.log(`\n${P}${chalk.hex("#475569")("Cancelled. Bye! 👋")}\n`);
  process.exit(0);
};

async function main() {
  await displayTitle();

  const hasGit = await checkGit();
  if (!hasGit) {
    console.log(`${P}${chalk.hex("#ef4444")("✗")} Git required.`);
    process.exit(1);
  }

  // Template
  await sectionHeader("Select template");
  console.log();

  const { template } = await prompts({
    type: "select",
    name: "template",
    message: " ",
    choices: getChoices(),
    hint: "↑↓ enter",
  }, { onCancel });

  if (!template) process.exit(0);

  // Name
  console.log();
  await sectionHeader("Project name");
  console.log();

  const { projectName } = await prompts({
    type: "text",
    name: "projectName",
    message: " ",
    initial: "my-project",
    hint: "use '.' for current folder",
    validate: (v) => !v ? "Required" : !/^[a-zA-Z0-9-_.]+$/.test(v) ? "Invalid chars" : true,
  }, { onCancel });

  if (!projectName) process.exit(0);

  const projectPath = path.join(process.cwd(), projectName);

  // Features
  console.log();
  await sectionHeader("Add features", "📦");
  console.log();

  const { features } = await prompts({
    type: "multiselect",
    name: "features",
    message: " ",
    choices: getFeatureChoices(),
    hint: "space enter",
  }, { onCancel });

  // Setup
  console.log();
  process.stdout.write(`${P}${chalk.hex("#3b82f6")("🚀")} `);
  for (const char of "Setting up...") {
    process.stdout.write(chalk.white(char));
    await sleep(25);
  }
  console.log("\n");

  const cloned = await cloneRepo(template.url, projectName);
  if (!cloned) process.exit(1);

  await initGit(projectPath);
  await installDependencies(projectPath);
  await installFeatures(features || [], projectPath);
  await displayThankYou(projectName);
}

main().catch((e) => {
  console.error(`${P}${chalk.hex("#ef4444")("✗")} ${e.message}`);
  process.exit(1);
});
