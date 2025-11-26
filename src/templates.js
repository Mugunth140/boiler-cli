// ============================================
// Template Data for Generated Files
// ============================================

export const ENV_TEMPLATE = `# Environment Variables
# Copy this file to .env and fill in your values

# App Configuration
NODE_ENV=development
PORT=3000
HOST=localhost

# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
# MONGODB_URI=mongodb://localhost:27017/mydb

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d

# API Keys (add your own)
# API_KEY=your-api-key
# STRIPE_SECRET_KEY=sk_test_xxx

# Email Configuration (optional)
# SMTP_HOST=smtp.mailtrap.io
# SMTP_PORT=587
# SMTP_USER=your-smtp-user
# SMTP_PASS=your-smtp-password

# External Services (optional)
# REDIS_URL=redis://localhost:6379
# AWS_ACCESS_KEY_ID=your-aws-access-key
# AWS_SECRET_ACCESS_KEY=your-aws-secret-key
# AWS_REGION=us-east-1

# Logging
LOG_LEVEL=debug
`;

export const GITIGNORE_TEMPLATE = `# Dependencies
node_modules/
.pnp/
.pnp.js

# Build outputs
dist/
build/
out/
.next/
.nuxt/
.output/

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.env*.local

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Coverage & Testing
coverage/
.nyc_output/
*.lcov
.coverage/

# IDE & Editor
.idea/
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
*.swp
*.swo
*~
.project
.classpath
.settings/

# OS files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Optional npm cache
.npm/
.eslintcache
.cache/

# TypeScript
*.tsbuildinfo

# Temporary files
tmp/
temp/
*.tmp
*.temp

# Package manager locks (keep one based on your preference)
# package-lock.json
# yarn.lock
# pnpm-lock.yaml

# Misc
*.bak
*.backup
`;

export const ESLINT_CONFIG = `import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      // Best Practices
      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "prefer-const": "error",
      "no-var": "error",

      // Style
      "semi": ["error", "always"],
      "quotes": ["error", "double", { avoidEscape: true }],
      "indent": ["error", 2],
      "comma-dangle": ["error", "always-multiline"],
      "eol-last": ["error", "always"],
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],

      // ES6+
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-duplicate-imports": "error",
      "object-shorthand": ["error", "always"],
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
    },
  },
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      "coverage/",
      "*.min.js",
    ],
  },
];
`;

export const PRETTIER_CONFIG = `{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf",
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "bracketSameLine": false,
  "proseWrap": "preserve"
}
`;

export const PRETTIER_IGNORE = `# Dependencies
node_modules/

# Build outputs
dist/
build/
.next/
.nuxt/

# Coverage
coverage/

# Logs
*.log

# Lock files
package-lock.json
yarn.lock
pnpm-lock.yaml

# Generated files
*.min.js
*.min.css
`;

export const HUSKY_PRE_COMMIT = `#!/usr/bin/env sh
. "\$(dirname -- "\$0")/_/husky.sh"

echo "Running pre-commit checks..."

# Run linting
echo "Checking code style with ESLint..."
npm run lint --if-present || {
  echo "ESLint found errors. Please fix them before committing."
  exit 1
}

# Run prettier check
echo "Checking formatting with Prettier..."
npm run format:check --if-present || {
  echo "Prettier found formatting issues. Run npm run format to fix them."
  exit 1
}

# Run tests (if available)
echo "Running tests..."
npm test --if-present || {
  echo "Tests failed or not configured. Continuing anyway..."
}

echo "All pre-commit checks passed!"
`;

export const HUSKY_COMMIT_MSG = `#!/usr/bin/env sh
. "\$(dirname -- "\$0")/_/husky.sh"

# Conventional Commits validation
commit_regex='^(feat|fix|docs|style|refactor|perf|test|chore|build|ci|revert)(\\(.+\\))?: .{1,50}'

if ! grep -qE "\$commit_regex" "\$1"; then
  echo "Invalid commit message format!"
  echo ""
  echo "Your commit message must follow Conventional Commits format:"
  echo "  <type>(<scope>): <description>"
  echo ""
  echo "Types: feat, fix, docs, style, refactor, perf, test, chore, build, ci, revert"
  echo ""
  echo "Examples:"
  echo "  feat: add user authentication"
  echo "  fix(api): resolve token validation issue"
  echo "  docs: update README with new instructions"
  echo ""
  exit 1
fi

echo "Commit message format is valid!"
`;

export const LINT_STAGED_CONFIG = `{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md,yml,yaml}": [
    "prettier --write"
  ],
  "*.css": [
    "prettier --write"
  ]
}
`;
