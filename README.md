# Nuxt-Bridge

This repository intend to give an easy start with a fully setup Nuxt-Bridge working with :

- Vuetify
- Pinia
- Typescript
- Axios
- Storybook

## VSCode Setup

Before anything, do not forget to install the recommended extensions :

- ESLint
- Prettier - Code formatter
- TSLint
- TypeScript Vue Plugin (Volar) :gun:
- Vue Language Features (Volar) :gun:

(Bonus)

- Better Comments
- Error Lens
- Git Graph
- GitLens

## Auto formatting

Open your VSCode settings `cmd`+ `shift`+ `p` and then, paste the following code into it

```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
```

## Run/Build

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# storybook
$ yarn storybook

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
