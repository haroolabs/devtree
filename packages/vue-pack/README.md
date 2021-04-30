# @devtree/vue-pack

<p align="center">
  <img src="https://img.shields.io/github/license/tetritz/devtree?style=for-the-badge" alt="License MIT">
</p>

This is NOT for PRODUCTION.\
Now it is in testing.
---

This package includes the shareable ESLint configuration,
Prettier configuration for Vue, <b>TypeScript</b> development.

## Installation
- Using npm:
```shell script
npm i -D @devtree/vue-pack
```

- or using yarn:
```shell script
yarn add -D @devtree/vue-pack
```

## Usage

### Basic usage
- `package.json`
```json
{
  "eslintConfig": {
    "extends": [
      "@devtree/vue-pack/eslint/base"
    ]
  }
} 
```

- Or, `.eslintrc.json`
```json
{
  "extends": "@devtree/vue-pack/base"
}
```

### Basic usage for Nuxt.js
- `.eslintrc.json`
```json
{
  "extends": "@devtree/vue-pack/nuxt"
}
```

## Configuration Set

- @devtree/vue-pack/base : for normal Vue projects.
- @devtree/vue-pack/nuxt : for Nuxt.js projects.

## License

@devtree/vue-pack is licensed under the [MIT License.](https://github.com/tetritz/devtree/blob/main/LICENSE)
