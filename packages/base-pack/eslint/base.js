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
    require.resolve('eslint-config-airbnb-base'),
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'class-methods-use-this': 0,
    eqeqeq: 0,
    'func-names': 0,
    'global-require': 0,
    'import/export': 0,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/prefer-default-export': 0,
    'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }],
    'no-console': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
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
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts', '.d.ts'],
      },
      typescript: {
        /* project: ['tsconfig.json', 'packages/ * /tsconfig.json'], */
      },
    },
  },

  // For TypeScript
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        'import/no-cycle': 0,
        'import/no-unresolved': 0,

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
