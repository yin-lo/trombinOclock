module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    // Si on souhaite indenter avec des tabulations
    // indent: ['error', 'tab'],
    // 'no-tabs': 'off',
  },
};
