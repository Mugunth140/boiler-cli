import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import { createSpinner } from "nanospinner";
import chalk from "chalk";
import { theme, icons, box, P } from "./theme.js";

const execAsync = promisify(exec);

// Sleep utility
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Clear line and move cursor
export const clearLine = () => {
  process.stdout.write("\r\x1b[K");
};

// Padding helper
export const pad = (str, len = 20) => str.padEnd(len);

// Subtle typewriter effect
export async function typeWriter(text, delay = 30) {
  for (const char of text) {
    process.stdout.write(char);
    await sleep(delay);
  }
  console.log();
}

// Draw a styled divider
export function divider(width = 50) {
  return theme.muted(box.line.repeat(width));
}

// Styled section header
export function sectionHeader(title, icon = icons.arrow) {
  return `\n${P}${theme.primary(icon)} ${chalk.bold.white(title)}`;
}

// Modern spinner with custom styling
export function createModernSpinner(text) {
  return createSpinner(`${P}${theme.text(text)}`, {
    color: "magenta",
    frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
  });
}

// Helper function to run shell commands with timeout
export async function runCommand(command, cwd = process.cwd(), timeout = 300000) {
  try {
    const { stdout, stderr } = await execAsync(command, {
      cwd,
      timeout,
      maxBuffer: 10 * 1024 * 1024,
    });
    return { success: true, stdout, stderr };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Safe file write with error handling
export function safeWriteFile(filePath, content) {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content, "utf8");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Helper to add scripts to package.json
export async function addScriptToPackageJson(projectPath, scriptName, scriptCommand) {
  try {
    const packageJsonPath = path.join(projectPath, "package.json");

    if (!fs.existsSync(packageJsonPath)) {
      return false;
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

    if (!packageJson.scripts) {
      packageJson.scripts = {};
    }

    if (!packageJson.scripts[scriptName]) {
      packageJson.scripts[scriptName] = scriptCommand;
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n", "utf8");
    }

    return true;
  } catch (error) {
    return false;
  }
}
