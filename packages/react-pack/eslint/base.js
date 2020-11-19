module.exports = {
  // For JavaScript
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    require.resolve('./airbnb'),
    // require.resolve('./airbnb/hooks'),
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react'],
  rules: {
    'class-methods-use-this': 'off',
    eqeqeq: 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-use-before-define': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },

  // For TypeScript
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        require.resolve('./airbnb'),
        // require.resolve('./airbnb/hooks'),
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        project: ['tsconfig.json'],
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint', 'prettier', 'react'],
      rules: {
        'class-methods-use-this': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'import/no-dynamic-require': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-console': 'off',
        'no-nested-ternary': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        ],
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            project: 'packages/*/tsconfig.json',
          },
        },
        react: {
          version: 'detect',
        },
      },
    },
  ],
};
