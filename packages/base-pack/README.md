# @devtree/base-pack

<p align="center">
  <img src="https://img.shields.io/github/license/haroolabs/devtree?style=for-the-badge" alt="License MIT">
</p>

This is NOT for PRODUCTION.\
Now it is in testing.
---

This package includes the shareable ESLint configuration,
Prettier configuration for <b>TypeScript</b> development.

## Installation
- Using npm:
```shell script
npm i -D @devtree/base-pack
```

- or using yarn:
```shell script
yarn add -D @devtree/base-pack
```

## Usage

### Basic usage
- `package.json`
```json
{
  "eslintConfig": {
    "extends": [
      "@devtree/base-pack/eslint/base"
    ]
  }
} 
```

- Or, `.eslintrc.json`
```json
{
  "extends": "@devtree/base-pack/base"
}
```


## Configuration Set

- @devtree/base-pack/base : for normal TypeScript projects.


## License

@devtree/base-pack is licensed under the [MIT License.](https://github.com/haroolabs/devtree/blob/main/LICENSE)
