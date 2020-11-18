# eslint-config-react-pack

<p align="center">
  <img src="https://img.shields.io/github/license/tetritz/devtree?style=for-the-badge" alt="License MIT">
</p>

A simple ESLint, Prettier configuration for React, Next.js development.\
This configuration for <b>TypeScript</b> projects.

## Installation
- If you use npm,
```shell script
npm i @devtree/eslint-config-react-pack
```

- Or if you use yarn,
```shell script
yarn add @devtree/eslint-config-react-pack
```

## Usage

### Basic usage
- `package.json`
```json
{
  "eslintConfig": {
    "extends": [
      "@devtree/react-pack/base"
    ]
  }
} 
```

- Or, `.eslintrc.json`
```json
{
  "root": true,
  "extends": [
    "@devtree/react-pack/base"
  ]
}
```

### Basic usage for Next.js
- `.eslintrc.json`
```json
{
  "root": true,
  "extends": [
    "@devtree/react-pack/next"
  ]
}
```

## Configuration Set

- @devtree/react-pack/base : for normal React projects.
- @devtree/react-pack/next : for Next.js projects.

## License

eslint-config-react-pack is licensed under the [MIT License.](https://github.com/tetritz/devtree/blob/main/LICENSE)
