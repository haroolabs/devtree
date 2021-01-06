module.exports = {
  extends: [require.resolve('./base')],

  rules: {
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight', 'to'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    'react/react-in-jsx-scope': 0,
  },
};
