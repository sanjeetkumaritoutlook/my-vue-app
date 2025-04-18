# my-vue-app
Vue 3.2 : https://blog.vuejs.org/posts/vue-3-2

check vue version : vue --version

npx vue --version  

## Project setup
```
npm install
```
### VS Code Estensions for Vue.js development
Vetur:- Provides syntax highlighting, IntelliSense, and formatting for .vue files. (Vue Tooling)

Vue Language Features (Volar):- The new official Vue 3 extension for TypeScript support and improved performance.

ESLint plugin - for linting and formatting.

Prettier - to maintain consistent code formatting.
### Github Pages steps
https://blog.logrocket.com/automatically-build-deploy-vuejs-app-github-pages/
https://github.com/dazecoop/github-page-deploy?tab=readme-ov-file

###  Vue CLI automatically sets process.env.NODE_ENV for you in different scenarios:

When you run npm run serve:

process.env.NODE_ENV is set to 'development'.

When you run npm run build:

process.env.NODE_ENV is set to 'production'.

Minimize dependencies and optimize imports (e.g., tree-shaking).

### <script setup>

In <script setup>, all functions, variables, and imports are top-level — so onClicked is directly available to the template.

You don’t need to define a methods object like in the options API.


Introduced in Vue 3.2

Not supported in Vue 2 at all (even with composition API plugin)

It’s part of the Composition API improvements that Vue 3 brought in

If you're using Vue 2:

You’re limited to the Options API (with data, methods, computed, etc.)

You can use the Composition API plugin in Vue 2.7+, but still no <script setup>


### Compiles and hot-reloads for development
```
npm run serve
```
runs on http://localhost:8080/
### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### see where this package is used
npm ls @achrinza/node-ipc
