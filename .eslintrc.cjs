module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-unused-vars': 'off', // Disable 'no-unused-vars' for JS/TS
    '@typescript-eslint/no-unused-vars': 'off', // Disable 'no-unused-vars' for TypeScript
  },
};
