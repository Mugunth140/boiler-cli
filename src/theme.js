import chalk from "chalk";

// ============================================
// Modern Theme & Styling
// ============================================

export const theme = {
  primary: chalk.hex("#6C5CE7"),      // Purple
  secondary: chalk.hex("#00CEC9"),    // Teal
  accent: chalk.hex("#FD79A8"),       // Pink
  success: chalk.hex("#00B894"),      // Green
  warning: chalk.hex("#FDCB6E"),      // Yellow
  error: chalk.hex("#FF7675"),        // Red
  muted: chalk.hex("#636E72"),        // Gray
  dim: chalk.hex("#2D3436"),          // Dark gray
  text: chalk.hex("#DFE6E9"),         // Light gray
  highlight: chalk.hex("#74B9FF"),    // Light blue
};

export const icons = {
  arrow: "›",
  check: "✓",
  cross: "✗",
  dot: "•",
  star: "★",
  rocket: "🚀",
  package: "📦",
  gear: "⚙",
  sparkles: "✨",
  folder: "📁",
  file: "📄",
  git: "🔀",
  npm: "📥",
  done: "✅",
  warning: "⚠",
  info: "ℹ",
  heart: "♥",
  community: "🤝",
  success: "✓",
  error: "✗",
  config: "⚙",
};

// Box drawing characters for modern UI
export const box = {
  tl: "╭",
  tr: "╮",
  bl: "╰",
  br: "╯",
  h: "─",
  v: "│",
  line: "─",
};

// Global padding for app
export const P = "   "; // 3 space padding
