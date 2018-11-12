# custom-nuxt 3.0

## Template for nuxt 3.0 with tailwind and postcss.

> PostCSS plugins: Auoprefixer, PostCSS Preset Env

> Code linting and formatting: Eslint and prettier

Recommended VSCode extenions:
> Tailwind CSS IntelliSense, ESLint, Prettier Now

VsCode Settings:  
``` bash
  "editor.formatOnSave": false,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "eslint.options": {
    "extensions": [
      ".html",
      ".js",
      ".vue",
      ".jsx"
    ]
  },
  "eslint.validate": [
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    }
  ],
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.singleQuote": true,
  "prettier.semi": false,
  "prettier.bracketSpacing": false,
  "prettier.bracesSpacing": false,
  "prettier.useTabs": false,
  "prettier.tabWidth": 2,
  "prettier.printWidth": 80,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.ts": "vscode-typescript",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
  "typescript.format.insertSpaceBeforeFunctionParenthesis": false,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": false,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": false,
  "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
  "typescript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
  "javascript.validate.enable": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "javascript.format.enable": false,
  "css.validate": false,
  "css.lint.unknownAtRules": "ignore",
  "css.lint.unknownProperties": "ignore",
  ```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
