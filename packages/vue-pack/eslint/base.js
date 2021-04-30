module.exports = {
  // For JavaScript
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    '@vue/typescript',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'vue'],
  rules: {
    'class-methods-use-this': 0,
    eqeqeq: 0,
    'func-names': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 0,
    'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }],
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-continue': 0,
    'no-loop-func': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-template-curly-in-string': 0, // for yup interpolation
    'no-undef': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,

    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.vue'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.json', '.ts', '.tsx', '.d.ts'],
      },
      typescript: {
        /* project: ['tsconfig.json', 'packages/ * /tsconfig.json'], */
      },
    },
  },

  // For TypeScript
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
      rules: {
        'import/no-cycle': 0,

        '@typescript-eslint/explicit-module-boundary-types': [
          1,
          {
            allowArgumentsExplicitlyTypedAsAny: true,
          },
        ],
      },
    },
  ],
};
