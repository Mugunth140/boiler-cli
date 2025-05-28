# boiler 🔥

[![npm version](https://img.shields.io/npm/v/@mugunth140/boiler)](https://www.npmjs.com/package/@mugunth140/boiler)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

> A lightning-fast CLI tool for kickstarting projects with custom boilerplate templates

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDNjNnpmcnN0Mzk4djVzbjlzbjQ2NTUweTIxZG9zMmVkMzY3aWhhNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o72FfM5HJydzafgUE/giphy.gif)

## Features

- 🚀 Instant public template access
- 🔒 Private template management
- ✨ Interactive prompts for seamless workflow
- 🎨 Animated terminal feedback
- 🔧 Extensible template system

## Installation

```bash
npm install -g @mugunth140/boiler
```

## Usage

### List public templates
```bash
boiler public
```

### Manage private templates
```bash
# List private templates
boiler private list

# Add new private template
boiler private add
```

### Show help
```bash
boiler --help
```

## Command Reference
| Command | Description |
|---------|-------------|
| `boiler public` | Show all available public templates |
| `boiler private list` | List your private templates |
| `boiler private add` | Add a new private template |
| `boiler --version` | Show installed version |
| `boiler --help` | Display command help |

## Development Setup

1. Clone repository:
```bash
git clone https://github.com/mugunth140/boiler-cli.git
cd boiler-cli
```

2. Install dependencies:
```bash
npm install
```

3. Link package globally:
```bash
npm link
```

4. Start in development mode:
```bash
npm run dev
```

## Dependencies

- [Commander.js](https://github.com/tj/commander.js) - Command framework
- [Chalk](https://github.com/chalk/chalk) - Terminal styling
- [Prompts](https://github.com/terkelg/prompts) - Interactive prompts
- [Nanospinner](https://github.com/usmanyunusov/nanospinner) - CLI spinners

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss proposed changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.