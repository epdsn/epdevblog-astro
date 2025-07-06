# 🚀 EPDSN.dev Blog – Built with AstroPaper

🌐 Live Site

🔗 epdsn.dev – A minimal, responsive, and SEO-friendly blog built using AstroPaper and deployed on AWS Amplify.

This site serves as my personal space for sharing technical insights, quick notes, and projects while experimenting with Astro, Next.js, and AWS Cloud technologies.

## ✨ Features

- [x] Accessible (Keyboard/VoiceOver)
- [x] Responsive (mobile ~ desktops)
- [x] Minimal & Responsive Design
- [x] Light & Dark Mode Support 🌙
- [x] SEO-Friendly & Fast 🚀
- [x] Blog with Pagination & Notes Section 📝
- [x] Customizable Theme & Font 🎨

## 🚀 Project Structure

Inside of AstroPaper, you'll see the following folders and files:

```bash
/
├── public/
│   ├── assets/
│   │   └── logo.svg
│   │   └── logo.png
│   └── favicon.svg
│   └── astropaper-og.jpg
│   └── robots.txt
│   └── toggle-theme.js
├── src/
│   ├── assets/
│   │   └── socialIcons.ts
│   ├── components/
│   ├── content/
│   │   ├── blog/
│   │   │   └── some-blog-posts.md
│   │   ├── projects/
│   │   │   └── some-projects.md
│   │   └── config.ts
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── config.ts
│   └── types.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

All blog posts are stored in `src/content/blog` directory.

## 📖 Documentation

- Astro Docs [live URL](https://astro-paper-v1.astro-paper.pages.dev/)
- Tailwind CSS Docs [TailwindCSS](https://tailwindcss.com/)
- AWS Amplify Docs [AWS Amplify](https://aws.amazon.com/amplify/)

## 🛠️ Tech Stack

**Main Framework** - [Astro](https://astro.build/)  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
**Component Framework** - [ReactJS](https://reactjs.org/)  
**Styling** - [TailwindCSS](https://tailwindcss.com/)  
**UI/UX** - [Figma](https://figma.com)  
**Fuzzy Search** - [FuseJS](https://fusejs.io/)  
**Icons** - [Boxicons](https://boxicons.com/) | [Tablers](https://tabler-icons.io/)  
**Code Formatting** - [Prettier](https://prettier.io/)  
**Deployment** - [AWS Amplify](https://aws.amazon.com/amplify/)  
**Linting** - [ESLint](https://eslint.org)

## 👨🏻‍💻 Running Locally

The easiest way to run this project locally is to run the following command in your desired directory.

```bash
# npm 6.x
npm create astro@latest --template satnaing/astro-paper

# npm 7+, extra double-dash is needed:
npm create astro@latest -- --template satnaing/astro-paper

# yarn
yarn create astro --template satnaing/astro-paper
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

> **_Note!_** For `Docker` commands we must have it [installed](https://docs.docker.com/engine/install/) in your machine.

### 🚀 Development Commands

| Command         | Action                                                                                                                           |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `npm install`   | Installs dependencies                                                                                                            |
| `npm run dev`   | Starts local dev server at `localhost:4321`                                                                                      |
| `npm run start` | Alias for `npm run dev`                                                                                                          |
| `npm run sync`  | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |

### 🏗️ Build & Deploy Commands

| Command              | Action                                                                               |
| :------------------- | :----------------------------------------------------------------------------------- |
| `npm run build`      | Build your production site to `./dist/`                                              |
| `npm run preview`    | Preview your build locally, before deploying                                         |
| `npm run pre-deploy` | **Pre-deployment check**: Runs lint, format check, type check, and build in sequence |

### 🔍 Code Quality Commands

| Command                | Action                          |
| :--------------------- | :------------------------------ |
| `npm run lint`         | Lint with ESLint                |
| `npm run format:check` | Check code format with Prettier |
| `npm run format`       | Format codes with Prettier      |
| `npm run type-check`   | Run TypeScript type checking    |

### 🐳 Docker Commands

| Command                              | Action                                                                                              |
| :----------------------------------- | :-------------------------------------------------------------------------------------------------- |
| `docker compose up -d`               | Run AstroPaper on docker, You can access with the same hostname and port informed on `dev` command. |
| `docker compose run app npm install` | You can run any command above into the docker container.                                            |

### 📝 Git & Commit Commands

| Command      | Action                              |
| :----------- | :---------------------------------- |
| `npm run cz` | Commit code changes with commitizen |

## 🧪 Pre-Deployment Checks

Before deploying your changes, it's recommended to run the pre-deployment check:

```bash
npm run pre-deploy
```

This command will:

1. **Lint** your code with ESLint
2. **Check formatting** with Prettier
3. **Type check** with TypeScript
4. **Build** the project to ensure everything compiles correctly

If any of these steps fail, the deployment will be blocked, helping you catch issues before they reach production.

## 🔧 Development Workflow

1. **Start development**: `npm run dev`
2. **Make your changes**
3. **Format code**: `npm run format`
4. **Check for issues**: `npm run lint`
5. **Test build**: `npm run build`
6. **Pre-deployment check**: `npm run pre-deploy`
7. **Commit changes**: `npm run cz`
8. **Deploy** 🚀

> **_Warning!_** Windows PowerShell users may need to install the [concurrently package](https://www.npmjs.com/package/concurrently) if they want to [run diagnostics](https://docs.astro.build/en/reference/cli-reference/#astro-check) during development (`astro check --watch & astro dev`). For more info, see [this issue](https://github.com/satnaing/astro-paper/issues/113).

## ✨ Feedback & Suggestions

Feel free to fork the repo and submit pull requests! Contributions, suggestions, and ideas are welcome.

Built with 🤍 by Eric Perez using Astro, Tailwind, and AWS Amplify. 🚀
