module.exports = {
  extends: [require.resolve('./base')],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },

  // For TypeScript
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
