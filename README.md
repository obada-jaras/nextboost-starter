# NextBoost Starter

A lightweight, ready-to-use, and fast-deploying Next.js starter template packed with essential tools for modern web applications. It streamlines development with Next.js, optimized configurations, and pre-integrated features for authentication, styling, theming, and database management.

## ⚡ Features

- 🚀 **Next.js** – The latest Next.js framework with App Router support.
- 📜 **TypeScript** – Type-safe development.
- ⚡ **Bun** – Fast package manager and runtime.
- 🔑 **Clerk** – Authentication and user management.
- 📡 **Convex** – Serverless database with real-time queries.
- 💨 **TailwindCSS v4** – Modern utility-first styling.
- 🌍 **next-intl** – Internationalization and localization.
- 🎨 **next-themes** – Dark mode and theme switching.
- 🧩 **ShadCN/UI** – Pre-built and customizable UI components.
- ✅ **ESLint & Prettier** – Code quality and formatting enforcement.

## 🏗️ Project Structure

```
.
├── .env.example          # Environment variables example
├── .gitignore
├── .prettierrc
├── bun.lock
├── eslint.config.mjs
├── next.config.mjs
├── package.json
├── tsconfig.json
│
├── convex/               # Convex serverless functions
│   ├── tasks.ts
│
├── messages/             # Localization files
│   ├── ar.json
│   ├── en.json
│
├── public/               # Static assets
│   ├── file.svg
│   ├── globe.svg
│
├── src/
    ├── app/              # Next.js App Router
    │   ├── layout.tsx
    │   ├── page.tsx
    │
    ├── components/
    │   ├── site/
    │   │   ├── convex-client-provider.tsx
    │   │   ├── theme-provider.tsx
    │   ├── ui/
    │       ├── button.tsx
    │
    ├── i18n/             # Internationalization
    │   ├── config.ts
    │   ├── request.ts
    │
    ├── lib/              # Utility functions
    │   ├── utils.ts
    │
    ├── services/         # App services
        ├── locale.ts
```

## 🚀 Getting Started

### **1️⃣ Installation**

First, clone the repository and install dependencies using Bun:

```sh
git clone https://github.com/obada-jaras/nextboost-starter.git
cd nextboost-starter
bun install
```

### **2️⃣ Environment Setup**

Create a `.env.local` file and configure your environment variables based on `.env.example`.

### **3️⃣ Running the Development Server**

Start the Next.js development server:

```sh
bun run dev
bun run dev --turbo
```

### **4️⃣ Build and Run in Production**

```sh
bun run preview
```

---

## 🛠️ Tech Stack

| Tool            | Purpose                                    |
| --------------- | ------------------------------------------ |
| Next.js         | React framework for web applications       |
| Clerk           | Authentication and user management         |
| Convex          | Serverless database with real-time updates |
| Bun             | Ultra-fast package manager and runtime     |
| TypeScript      | Statically-typed JavaScript                |
| next-intl       | Internationalization & translations        |
| next-themes     | Dark mode and theme switching              |
| TailwindCSS v4  | Utility-first CSS framework                |
| ESLint/Prettier | Code quality and formatting                |
| ShadCN/UI       | Pre-built UI components                    |

---

## 💡 Why Use NextBoost Starter?

- ✅ Fast to set up, ready to ship – just clone & start coding.
- ✅ Pre-configured authentication, database, and theming.
- ✅ Built-in support for i18n, dark mode, and UI components.
- ✅ Optimized with Bun & TypeScript for speed and stability.
- ✅ Enforced best practices with ESLint & Prettier.

---

## 📄 License

This project is open-source under the [MIT License](https://opensource.org/licenses/MIT).

---

## 🤝 Contributions

Contributions are highly encouraged! Whether it’s fixing bugs, improving docs, or adding features, we’d love your help.
