# Vitesting React

Vitest is a testing framework which is preferred by vite. Vite is a build tool for react.
This project uses the reactViteTemplate as template
you can find it [here](https://github.com/Z-K11/reactTemplateVite)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Comes with prettier pre-configured

Eslint has already been configured with eslint-config-prettier to let prettier handle the code formatting you can add or modify your prettier rules in './prettierc'

### Getting started

After cloning the repository run `npm install` & then run:
`./setUpProjectName.sh <your-project-name>`.
This will automatically replace the name of the current project `react-template` to whatever project name you provide.
Remember to change the `<title></title>` in **index.html** yourself as it needs to be human readable.

#### Instructions

The tutorial material is inside src as

- src/firstTest
- src/testingMultipleElements
- asynchronousTests

**IMPORTANT!** We assume you already know basic testing in javascript. We suggest you to use jest for simple javascript. But because I prefer using vite as a build tool for react? It was an obvious choice to switch from jest to vitest. Everything you have learnt in jest will mostly migrate to vitest. Vitest in my opinion has an easier syntax.

#### Credits

Everything discussed and implemented in this course ? follows this awesome react testing tutorial by [academind](https://academind.com/articles/testing-react-apps) be sure to visit the tutorial for theoretical understanding.

[react-testing-library](https://testing-library.com/docs/) docs, ofc have everything explained in great detail
[cheetsheet](https://testing-library.com/docs/dom-testing-library/cheatsheet/), I personally have this bookmarked
[mdn-wai-roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles) I will later explain you why you need to read this.
[vitest-official-docs] (https://vitest.dev/guide/)
