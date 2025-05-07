# 🚀 EPDSN.dev Blog – Built with AstroPaper

![AstroPaper](public/astropaper-og.jpg)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

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
│   │   |  blog/
│   │   |    └── some-blog-posts.md
│   │   └── config.ts
│   ├── layouts/
│   ├── pages/
│   │   ├── admin.astro
│   │   ├── login.astro
│   │   └── callback.astro
│   ├── styles/
│   ├── utils/
│   │   └── auth0Client.ts
│   ├── config/
│   │   └── auth0.ts
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
**Illustration in About Page** - [https://freesvgillustration.com](https://freesvgillustration.com/)  
**Linting** - [ESLint](https://eslint.org)

## 🔐 Authentication with Auth0

This blog includes authentication with Auth0, allowing you to log in and manage your blog content. To set up Auth0:

1. Create an Auth0 account at [https://auth0.com/](https://auth0.com/)
2. Create a new application (Single Page Application)
3. Configure the following settings in your Auth0 application:
   - Allowed Callback URLs: `http://localhost:4321/callback` (for development)
   - Allowed Logout URLs: `http://localhost:4321` (for development)
   - Allowed Web Origins: `http://localhost:4321` (for development)
4. Create a `.env` file in the root directory with the following variables:
   ```
   PUBLIC_AUTH0_DOMAIN=your-auth0-domain.auth0.com
   PUBLIC_AUTH0_CLIENT_ID=your-auth0-client-id
   PUBLIC_AUTH0_REDIRECT_URI=http://localhost:4321/callback
   PUBLIC_AUTH0_AUDIENCE=your-auth0-api-identifier
   ```
5. Replace the placeholder values with your actual Auth0 configuration

For production, update the URLs in your Auth0 application settings and in the `.env` file to match your production domain.

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

| Command                              | Action                                                                                                                           |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `npm install`                        | Installs dependencies                                                                                                            |
| `npm run dev`                        | Starts local dev server at `localhost:4321`                                                                                      |
| `npm run build`                      | Build your production site to `./dist/`                                                                                          |
| `npm run preview`                    | Preview your build locally, before deploying                                                                                     |
| `npm run format:check`               | Check code format with Prettier                                                                                                  |
| `npm run format`                     | Format codes with Prettier                                                                                                       |
| `npm run sync`                       | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `npm run cz`                         | Commit code changes with commitizen                                                                                              |
| `npm run lint`                       | Lint with ESLint                                                                                                                 |
| `docker compose up -d`               | Run AstroPaper on docker, You can access with the same hostname and port informed on `dev` command.                              |
| `docker compose run app npm install` | You can run any command above into the docker container.                                                                         |

> **_Warning!_** Windows PowerShell users may need to install the [concurrently package](https://www.npmjs.com/package/concurrently) if they want to [run diagnostics](https://docs.astro.build/en/reference/cli-reference/#astro-check) during development (`astro check --watch & astro dev`). For more info, see [this issue](https://github.com/satnaing/astro-paper/issues/113).

## ✨ Feedback & Suggestions

Feel free to fork the repo and submit pull requests! Contributions, suggestions, and ideas are welcome.

Built with 🤍 by Eric Perez using Astro, Tailwind, and AWS Amplify. 🚀
