import chalk from "chalk";
import path from "path";
import {
    ENV_TEMPLATE,
    ESLINT_CONFIG,
    GITIGNORE_TEMPLATE,
    HUSKY_COMMIT_MSG,
    HUSKY_PRE_COMMIT,
    LINT_STAGED_CONFIG,
    PRETTIER_CONFIG,
    PRETTIER_IGNORE,
} from "./templates.js";
import { icons, P, theme } from "./theme.js";
import { addScriptToPackageJson, createModernSpinner, runCommand, safeWriteFile, sleep } from "./utils.js";

// Create .env file
export async function createEnvFile(projectPath) {
  const spinner = createModernSpinner("Creating .env file...");
  spinner.start();

  await sleep(300);

  const result = safeWriteFile(path.join(projectPath, ".env"), ENV_TEMPLATE);

  if (result.success) {
    spinner.success({ text: `${P}${theme.success(icons.success)} .env file created!` });
    return true;
  } else {
    spinner.error({ text: `${P}${theme.error(icons.error)} Failed to create .env file` });
    return false;
  }
}

// Create .gitignore file
export async function createGitignore(projectPath) {
  const spinner = createModernSpinner("Creating .gitignore...");
  spinner.start();

  await sleep(300);

  const result = safeWriteFile(path.join(projectPath, ".gitignore"), GITIGNORE_TEMPLATE);

  if (result.success) {
    spinner.success({ text: `${P}${theme.success(icons.success)} .gitignore created!` });
    return true;
  } else {
    spinner.error({ text: `${P}${theme.error(icons.error)} Failed to create .gitignore` });
    return false;
  }
}

// Setup ESLint
export async function setupEslint(projectPath) {
  const spinner = createModernSpinner("Setting up ESLint...");
  spinner.start();

  // Install ESLint
  const installResult = await runCommand(
    "npm install -D eslint @eslint/js globals",
    projectPath
  );

  if (!installResult.success) {
    spinner.error({ text: `${P}${theme.error(icons.error)} Failed to install ESLint` });
    return false;
  }

  // Create config file
  const configResult = safeWriteFile(
    path.join(projectPath, "eslint.config.js"),
    ESLINT_CONFIG
  );

  if (!configResult.success) {
    spinner.error({ text: `${P}${theme.error(icons.error)} Failed to create ESLint config` });
    return false;
  }

  // Add script to package.json
  await addScriptToPackageJson(projectPath, "lint", "eslint .");
  await addScriptToPackageJson(projectPath, "lint:fix", "eslint . --fix");

  spinner.success({ text: `${P}${theme.success(icons.success)} ESLint configured!` });
  return true;
}

// Setup Prettier
export async function setupPrettier(projectPath) {
  const spinner = createModernSpinner("Setting up Prettier...");
  spinner.start();

  // Install Prettier
  const installResult = await runCommand(
    "npm install -D prettier",
    projectPath
  );

  if (!installResult.success) {
    spinner.error({ text: `${P}${theme.error(icons.error)} Failed to install Prettier` });
    return false;
  }

  // Create config files
  const configResult = safeWriteFile(
    path.join(projectPath, ".prettierrc"),
    PRETTIER_CONFIG
  );

  const ignoreResult = safeWriteFile(
    path.join(projectPath, ".prettierignore"),
    PRETTIER_IGNORE
  );

  if (!configResult.success || !ignoreResult.success) {
    spinner.error({ text: `${P}${theme.error(icons.error)} Failed to create Prettier config` });
    return false;
  }

  // Add scripts
  await addScriptToPackageJson(projectPath, "format", 'prettier --write "**/*.{js,jsx,ts,tsx,json,md}"');
  await addScriptToPackageJson(projectPath, "format:check", 'prettier --check "**/*.{js,jsx,ts,tsx,json,md}"');

  spinner.success({ text: `${P}${theme.success(icons.success)} Prettier configured!` });
  return true;
}

// Setup Husky with lint-staged
export async function setupHusky(projectPath) {
  const spinner = createModernSpinner("Setting up Husky & lint-staged...");
  spinner.start();

  // Install husky and lint-staged
  const installResult = await runCommand(
    "npm install -D husky lint-staged",
    projectPath
  );

  if (!installResult.success) {
    spinner.error({ text: `${P}${theme.error(icons.error)} Failed to install Husky` });
    return false;
  }

  // Initialize husky
  const huskyInit = await runCommand("npx husky init", projectPath);

  if (!huskyInit.success) {
    spinner.error({ text: `${P}${theme.error(icons.error)} Failed to initialize Husky` });
    return false;
  }

  // Create husky hooks
  const huskyDir = path.join(projectPath, ".husky");

  safeWriteFile(path.join(huskyDir, "pre-commit"), HUSKY_PRE_COMMIT);
  safeWriteFile(path.join(huskyDir, "commit-msg"), HUSKY_COMMIT_MSG);

  // Make hooks executable
  await runCommand("chmod +x .husky/pre-commit .husky/commit-msg", projectPath);

  // Create lint-staged config
  safeWriteFile(
    path.join(projectPath, ".lintstagedrc.json"),
    LINT_STAGED_CONFIG
  );

  // Add prepare script
  await addScriptToPackageJson(projectPath, "prepare", "husky");

  spinner.success({ text: `${P}${theme.success(icons.success)} Husky & lint-staged configured!` });
  return true;
}

// Install selected features
export async function installFeatures(features, projectPath) {
  if (features.length === 0) {
    console.log(`\n${P}${theme.muted("No additional features selected")}\n`);
    return;
  }

  console.log(`\n${P}${chalk.hex("#3b82f6")("📦")} ${chalk.bold.white("Installing features...")}\n`);

  for (const feature of features) {
    switch (feature) {
      case "env":
        await createEnvFile(projectPath);
        break;
      case "gitignore":
        await createGitignore(projectPath);
        break;
      case "eslint":
        await setupEslint(projectPath);
        break;
      case "prettier":
        await setupPrettier(projectPath);
        break;
      case "husky":
        await setupHusky(projectPath);
        break;
    }
  }
}
