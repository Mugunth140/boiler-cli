<div align="center">

```
      ██████╗  ██████╗ ██╗██╗     ███████╗██████╗ 
      ██╔══██╗██╔═══██╗██║██║     ██╔════╝██╔══██╗
      ██████╔╝██║   ██║██║██║     █████╗  ██████╔╝
      ██╔══██╗██║   ██║██║██║     ██╔══╝  ██╔══██╗
      ██████╔╝╚██████╔╝██║███████╗███████╗██║  ██║
      ╚═════╝  ╚═════╝ ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
```

# Boiler

**A lightning-fast CLI tool for kickstarting projects**

[![npm version](https://img.shields.io/npm/v/@mugunth140/boiler?color=3b82f6&style=flat-square)](https://www.npmjs.com/package/@mugunth140/boiler)
[![license](https://img.shields.io/npm/l/@mugunth140/boiler?color=22c55e&style=flat-square)](./LICENSE)
[![downloads](https://img.shields.io/npm/dm/@mugunth140/boiler?color=a78bfa&style=flat-square)](https://www.npmjs.com/package/@mugunth140/boiler)

[Installation](#-installation) • [Usage](#-usage) • [Templates](#-templates) • [Features](#-features) • [Contributing](#-contributing)

</div>

---

## ✨ Highlights

- 🎨 **Beautiful UI** — Sleek animations, shimmer effects & modern design
- ⚡ **Lightning Fast** — Scaffold projects in seconds
- 📦 **Curated Templates** — Handpicked production-ready boilerplates
- 🛠️ **Dev Tools** — ESLint, Prettier, Husky pre-configured
- 🔧 **Zero Config** — Auto git init & dependency installation
- 🌐 **Universal** — Works with npm, yarn, pnpm, bun & deno

---

## 📦 Installation

### Using npm

```bash
# Install globally
npm install -g @mugunth140/boiler

# Or run directly with npx
npx @mugunth140/boiler
```

### Using yarn

```bash
# Install globally
yarn global add @mugunth140/boiler

# Or run directly
yarn dlx @mugunth140/boiler
```

### Using pnpm

```bash
# Install globally
pnpm add -g @mugunth140/boiler

# Or run directly
pnpm dlx @mugunth140/boiler
```

### Using bun

```bash
# Install globally
bun add -g @mugunth140/boiler

# Or run directly
bunx @mugunth140/boiler
```

### Using deno

```bash
# Run directly
deno run -A npm:@mugunth140/boiler
```

---

## 🚀 Usage

Simply run the command and follow the interactive prompts:

```bash
boiler
```

### Interactive Flow

```
1. Select template    →  Choose from curated boilerplates
2. Name your project  →  Enter project name (or "." for current dir)
3. Add features       →  Select optional dev tools
4. Auto setup         →  Git init + dependency install
```

### Quick Start Example

```bash
$ boiler

      ██████╗  ██████╗ ██╗██╗     ███████╗██████╗ 
      ██╔══██╗██╔═══██╗██║██║     ██╔════╝██╔══██╗
      ██████╔╝██║   ██║██║██║     █████╗  ██████╔╝
      ██╔══██╗██║   ██║██║██║     ██╔══╝  ██╔══██╗
      ██████╔╝╚██████╔╝██║███████╗███████╗██║  ██║
      ╚═════╝  ╚═════╝ ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝

   A lightning-fast CLI tool for kickstarting projects

   › Select template
   › express-typescript

   › Project name
   › my-awesome-api

   📦 Add features
   › ESLint, Prettier

   🚀 Setting up...
   ✓ Repository cloned successfully!
   ✓ Git initialized!
   ✓ Dependencies installed!
   ✓ Features configured!

   ✨ Project ready!

   cd my-awesome-api
   npm run dev
```

---

## 📋 Templates

### React / Next.js
| Template | Description |
|:---------|:------------|
| **next-enterprise** | Enterprise-grade Next.js with TypeScript, Tailwind, testing, CI/CD |
| **nextjs-starter** | Next.js 14+ with App Router, TypeScript, ESLint, Prettier, Tailwind |
| **bulletproof-react** | Scalable and powerful React application architecture |
| **create-t3-app** | Full-stack typesafe Next.js with tRPC, Prisma, and more |
| **taxonomy** | Next.js 13 app with Radix UI, Tailwind, and shadcn/ui |

### Vue / Nuxt
| Template | Description |
|:---------|:------------|
| **vitesse** | Vite + Vue starter with file-based routing, UnoCSS, and SSG |
| **vue-vben-admin** | Vue 3 admin template with TypeScript, Vite, Pinia, Ant Design |
| **nuxt3-starter** | Nuxt 3 with Tailwind, HeadlessUI, and ESLint |

### Node.js / Backend
| Template | Description |
|:---------|:------------|
| **express-typescript** | Express TypeScript 2025 – production-ready backend starter |
| **nestjs-boilerplate** | NestJS with Auth, TypeORM, Postgres, MongoDB, Docker, I18N |
| **node-typescript** | Minimalistic Node.js TypeScript with ESLint and Vitest |
| **fastify-starter** | Fastify DX full-stack with Vue, React, and Solid support |

### Mobile
| Template | Description |
|:---------|:------------|
| **react-native-obytes** | Expo, TypeScript, TailwindCSS, Husky, EAS, GitHub Actions |
| **ignite** | Infinite Red's battle-tested React Native with MobX-State-Tree |

### Full Stack / SaaS
| Template | Description |
|:---------|:------------|
| **saas-starter** | Next.js SaaS starter with authentication and billing |

### Desktop
| Template | Description |
|:---------|:------------|
| **electron-vite** | Next-gen Electron build tooling with Vite |
| **electron-react** | Electron + React + Redux + Hot Reloading |

### Python
| Template | Description |
|:---------|:------------|
| **fastapi-template** | Full stack FastAPI with PostgreSQL, Docker, React frontend |
| **django-cookiecutter** | Production-ready Django with Docker and Celery |

### Go
| Template | Description |
|:---------|:------------|
| **go-clean-arch** | Go Clean Architecture with REST API |

### Other Frameworks
| Template | Description |
|:---------|:------------|
| **turborepo-starter** | High-performance monorepo build system from Vercel |
| **astro-starter** | Web framework for content-driven websites |
| **sveltekit-starter** | SvelteKit with SSR, routing, and more |
| **typescript-cli** | CLI helper library for Node.js |

> 💡 **Want to add your own template?** [Contribute](#-contributing) to the repo!

---

## 🛠️ Features

Optional development tools you can add to any project:

| Feature | Description |
|:--------|:------------|
| `.env` | Environment variables template |
| `.gitignore` | Comprehensive ignore patterns |
| `ESLint` ★ | JavaScript/TypeScript linting |
| `Prettier` ★ | Code formatting |
| `Husky` | Git hooks + lint-staged |

> ★ Recommended for all projects

---

## 🔧 Requirements

- **Node.js** 18.0.0 or higher
- **Git** installed and accessible from command line
- **Package Manager** — npm, yarn, pnpm, bun, or deno

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Adding a Template

1. Fork the repository
2. Add your template to `data.js`:

```javascript
{
  id: 7,
  name: "your-template-name",
  url: "https://github.com/username/repo.git",
  category: "category",
  description: "Short description of your template"
}
```

3. Submit a Pull Request

### Development

```bash
# Clone the repo
git clone https://github.com/mugunth140/boiler-cli.git
cd boiler-cli

# Install dependencies
npm install

# Run locally
npm run dev
```

---

## 📄 License

MIT © [Mugunth](https://github.com/mugunth140)

---

<div align="center">

Made with ♥ by **Mugunth**

[GitHub](https://github.com/mugunth140) • [npm](https://www.npmjs.com/package/@mugunth140/boiler)

</div>
