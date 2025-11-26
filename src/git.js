import fs from "fs";
import path from "path";
import { theme, icons, P } from "./theme.js";
import { runCommand, createModernSpinner, sleep } from "./utils.js";

// Check if git is installed
export async function checkGit() {
  const result = await runCommand("git --version");
  return result.success;
}

// Clone repository
export async function cloneRepo(repoUrl, projectName) {
  const spinner = createModernSpinner(`Cloning ${projectName}...`);
  spinner.start();

  await sleep(500);

  const result = await runCommand(`git clone --depth 1 ${repoUrl} "${projectName}"`);

  if (result.success) {
    // Remove .git folder to start fresh
    const gitDir = path.join(process.cwd(), projectName, ".git");
    if (fs.existsSync(gitDir)) {
      fs.rmSync(gitDir, { recursive: true, force: true });
    }

    spinner.success({ text: `${P}${theme.success(icons.success)} Repository cloned successfully!` });
    return true;
  } else {
    spinner.error({ text: `${P}${theme.error(icons.error)} Failed to clone repository` });
    return false;
  }
}

// Initialize git repository
export async function initGit(projectPath) {
  const spinner = createModernSpinner("Initializing Git repository...");
  spinner.start();

  await sleep(300);

  const result = await runCommand("git init", projectPath);

  if (result.success) {
    spinner.success({ text: `${P}${theme.success(icons.success)} Git initialized!` });
    return true;
  } else {
    spinner.error({ text: `${P}${theme.error(icons.error)} Git initialization failed` });
    return false;
  }
}

// Install npm dependencies
export async function installDependencies(projectPath) {
  const spinner = createModernSpinner("Installing dependencies (this may take a moment)...");
  spinner.start();

  const result = await runCommand("npm install", projectPath, 600000);

  if (result.success) {
    spinner.success({ text: `${P}${theme.success(icons.success)} Dependencies installed!` });
    return true;
  } else {
    spinner.error({ text: `${P}${theme.error(icons.error)} npm install failed` });
    console.log(`${P}${theme.muted("Run 'npm install' manually in the project folder")}`);
    return false;
  }
}
