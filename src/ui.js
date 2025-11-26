import chalk from "chalk";
import { Data as templates } from "../data.js";
import { box, P } from "./theme.js";
import { sleep } from "./utils.js";

// Typewriter effect
async function typewrite(text, color = "#94a3b8", speed = 12) {
  for (const char of text) {
    process.stdout.write(chalk.hex(color)(char));
    await sleep(speed);
  }
}

// Blue shimmer effect for logo
async function shimmerLogo(logo) {
  const blueHues = [
    "#1e3a5f", "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd", 
    "#60a5fa", "#3b82f6", "#2563eb", "#1e3a5f"
  ];
  
  console.log();
  for (const line of logo) {
    console.log(chalk.hex("#1e3a5f")(line));
  }
  
  for (let pass = 0; pass < 2; pass++) {
    for (let offset = 0; offset < logo[0].length + blueHues.length; offset += 2) {
      process.stdout.write("\x1b[" + (logo.length + 1) + "A");
      
      for (const line of logo) {
        let coloredLine = "";
        for (let i = 0; i < line.length; i++) {
          const shimmerPos = offset - i;
          if (shimmerPos >= 0 && shimmerPos < blueHues.length) {
            coloredLine += chalk.hex(blueHues[shimmerPos])(line[i]);
          } else {
            coloredLine += chalk.hex("#2563eb")(line[i]);
          }
        }
        console.log(coloredLine);
      }
      await sleep(10);
    }
  }
  
  process.stdout.write("\x1b[" + (logo.length + 1) + "A");
  for (const line of logo) {
    console.log(chalk.hex("#60a5fa").bold(line));
  }
}

// Animated title
export async function displayTitle() {
  console.clear();
  
  const logo = [
    "      ██████╗  ██████╗ ██╗██╗     ███████╗██████╗ ",
    "      ██╔══██╗██╔═══██╗██║██║     ██╔════╝██╔══██╗",
    "      ██████╔╝██║   ██║██║██║     █████╗  ██████╔╝",
    "      ██╔══██╗██║   ██║██║██║     ██╔══╝  ██╔══██╗",
    "      ██████╔╝╚██████╔╝██║███████╗███████╗██║  ██║",
    "      ╚═════╝  ╚═════╝ ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝",
  ];

  await shimmerLogo(logo);
  
  console.log();
  process.stdout.write(P);
  console.log();
  process.stdout.write(P);
  await typewrite("A lightning-fast CLI tool for kickstarting projects", "#64748b", 15);
  console.log();
  
  process.stdout.write(P);
  for (let i = 0; i < 50; i++) {
    process.stdout.write(chalk.hex("#334155")("─"));
    await sleep(5);
  }
  console.log("\n");
}

// Animated section header
export async function sectionHeader(title, icon = "›") {
  process.stdout.write(`${P}${chalk.hex("#3b82f6")(icon)} `);
  await typewrite(title, "#ffffff", 20);
  console.log();
}

// Template choices
export function getChoices() {
  const maxLen = Math.max(...templates.map((t) => t.name.length));

  return templates.map((t) => ({
    title: `${chalk.hex("#60a5fa").bold(t.name.padEnd(maxLen + 3))}${chalk.hex("#475569")(t.description.length > 45 ? t.description.slice(0, 42) + "..." : t.description)}`,
    value: t,
  }));
}

// Feature choices
export function getFeatureChoices() {
  const f = [
    { n: ".env", v: "env" },
    { n: ".gitignore", v: "gitignore" },
    { n: "ESLint", v: "eslint", r: 1 },
    { n: "Prettier", v: "prettier", r: 1 },
    { n: "Husky", v: "husky" },
  ];

  return f.map((x) => ({
    title: `${chalk.hex("#60a5fa")(x.n)}${x.r ? chalk.hex("#fbbf24")(" ★") : ""}`,
    value: x.v,
  }));
}

// Thank you with credits
export async function displayThankYou(projectName) {
  console.log();
  
  const w = 48;
  const lines = [
    `${box.tl}${box.h.repeat(w)}${box.tr}`,
    `${box.v}${" ".repeat(w)}${box.v}`,
    `${box.v}   ✨ Project ready!${" ".repeat(w - 21)}${box.v}`,
    `${box.v}${" ".repeat(w)}${box.v}`,
    `${box.v}   cd ${projectName}${" ".repeat(Math.max(1, w - 6 - projectName.length))}${box.v}`,
    `${box.v}   npm run dev${" ".repeat(w - 15)}${box.v}`,
    `${box.v}${" ".repeat(w)}${box.v}`,
    `${box.bl}${box.h.repeat(w)}${box.br}`,
  ];
  
  for (const line of lines) {
    console.log(`${P}${chalk.hex("#3b82f6")(line)}`);
    await sleep(30);
  }
  
  console.log();
  process.stdout.write(`${P}${chalk.hex("#22c55e")("✓")} `);
  await typewrite("Project setup successfully!", "#22c55e", 25);
  console.log();
  
  await sleep(300);
  console.log();
  console.log(`${P}${chalk.hex("#334155")("─".repeat(48))}`);
  process.stdout.write(`${P}${chalk.hex("#a78bfa")("✨")} `);
  await typewrite("Contribute your templates via PR!", "#64748b", 18);
  console.log();
  console.log(`${P}   ${chalk.hex("#475569")("github.com/mugunth140/boiler-cli")}`);
  console.log(`${P}${chalk.hex("#334155")("─".repeat(48))}`);
  
  await sleep(400);
  console.log();
  console.log(`${P}   ${chalk.hex("#475569")("Made with")} ${chalk.hex("#ef4444")("❤️ ")} ${chalk.hex("#475569")("by")} ${chalk.hex("#60a5fa")("Mugunth")}`);
  console.log();
}
