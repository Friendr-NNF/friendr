# Getting started

0. Make sure to have [`Node.js`](https://nodejs.org/en/download)  and [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

1. `git clone` this repo
> Example: `git clone ... ~`

2. `cd` into the directory where you cloned this repo
> Example: `cd ~/friendr`

3. Install the packages

<details>
    <summary>Using <code>yarn</code></summary>
    <div><code>yarn install</code></div>
</details>

<details>
    <summary>Using <code>npm</code></summary>
    <div><code>npm install</code></div>
</details>

4. Running the developer server

<details>
    <summary>Using <code>yarn</code></summary>
    <div><code>yarn run dev</code></div>
</details>

<details>
    <summary>Using <code>npm</code></summary>
    <div><code>npm run dev</code></div>
</details>

5. Seeing the changes you're making

Open a browser and head over to `localhost:5173` to see the app

Hot reload is enabled! This means that as long as the dev server is running, you can save the changes
you make to any file in `src/` folder, go back to `localhost:5173`, reload the page, and you'll be able to see
your changes without having to rerun the dev server!

# How to make changes to the app

The app's source files reside in the `src/` folder.

`main.jsx` is the entry point of the application

# Useful resources

I (Bjtn1) use most of these and other sources to understand what to do and what I'm doing

[React course from The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/react)
[Node.js course from the Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs)

# The Tech Stack

[MERN](https://www.mongodb.com/mern-stack)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
