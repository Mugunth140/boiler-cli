# 🚀 Boiler CLI

> Modern project scaffolding made simple

A beautiful, interactive CLI tool for scaffolding projects with pre-configured templates, development tools, and best practices.

![npm version](https://img.shields.io/npm/v/@mugunth140/boiler)
![license](https://img.shields.io/npm/l/@mugunth140/boiler)

## ✨ Features

- 🎨 **Beautiful UI** - Modern, colorful interface with animations
- 📦 **Multiple Templates** - Choose from various project boilerplates
- ⚡ **Quick Setup** - Get started in seconds with automated setup
- 🛠️ **Dev Tools** - Optional ESLint, Prettier, Husky integration
- 🔧 **Flexible** - Customize your project setup as needed

## 📦 Installation

```bash
# Using npm
npm install -g @mugunth140/boiler

# Using npx (no installation required)
npx @mugunth140/boiler
```

## 🚀 Usage

Simply run the command and follow the interactive prompts:

```bash
boiler
```

### What you'll be asked:

1. **Select a template** - Choose from available boilerplates
2. **Name your project** - Enter your project name
3. **Select features** - Choose additional tools to install
4. **Confirm options** - Git init and npm install

## 📋 Available Templates

| Template | Description |
|----------|-------------|
| React + Vite | Modern React setup with Vite |
| Next.js | Full-stack React framework |
| Express API | Node.js REST API starter |
| Vue + Vite | Vue 3 with Vite |
| And more... | Check the CLI for all options |

## 🛠️ Optional Features

| Feature | Description |
|---------|-------------|
| `.env` | Environment variables template |
| `.gitignore` | Comprehensive ignore patterns |
| **ESLint** | JavaScript/TypeScript linting (recommended) |
| **Prettier** | Code formatting (recommended) |
| **Husky** | Git hooks with lint-staged |

## 📁 Project Structure

```
boiler-cli/
├── index.js          # Main CLI entry point
├── data.js           # Template definitions
├── package.json
├── README.md
└── src/
    ├── theme.js      # Colors, icons, styling
    ├── utils.js      # Utility functions
    ├── templates.js  # File templates (env, eslint, etc.)
    ├── git.js        # Git operations
    ├── features.js   # Feature installation logic
    └── ui.js         # UI components
```

## 🔧 Configuration

### Adding Custom Templates

Edit `data.js` to add your own templates:

```javascript
export default [
  {
    name: "My Template",
    description: "Description of my template",
    repo: "https://github.com/user/repo"
  },
  // ... more templates
];
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Adding New Templates

Want to add your own boilerplate templates? We'd love to include them!

1. Add your template to `data.js`
2. Make sure your template repo is public
3. Submit a PR with a description of your template

## 📝 License

MIT © [Mugunth](https://github.com/mugunth140)

---

<p align="center">
  <sub>Made with ❤️ by <a href="https://github.com/mugunth140">Mugunth</a></sub>
</p>

<p align="center">
  <sub>For adding your own templates, feel free to contribute to the repo and raise a PR!</sub>
</p>
