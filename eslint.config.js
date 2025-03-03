const reactPlugin = require('eslint-plugin-react');
const importPlugin = require('eslint-plugin-import');
const prettierPlugin = require('eslint-plugin-prettier');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
      globals: {
        // Define browser globals, so ESLint won't flag them as undefined
        structuredClone: 'readonly',
        localStorage: 'readonly',
        setTimeout: 'readonly', // Declare setTimeout globally
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        sessionStorage: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        document: 'readonly',
        process: 'readonly',
        fetch: 'readonly',
        console: 'readonly',
        btoa: 'readonly',
        global: 'readonly',
        __PLATFORM__: 'readonly',
        __SERVER__: 'readonly',
      },
    },
    plugins: {
      react: reactPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      quotes: [2, 'single', 'avoid-escape'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': 1,
      '@typescript-eslint/no-use-before-define': 1,
      '@typescript-eslint/no-inferrable-types': 0,
      '@typescript-eslint/no-empty-function': 1,
      'import/no-duplicates': 0,
      'jsx-quotes': [2, 'prefer-double'],
      'key-spacing': 0,
      'max-lines': [2, 500],
      'max-len': [
        1,
        {
          code: 80,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          tabWidth: 2,
        },
      ],
      'no-new': 1,
      'no-shadow': [
        1,
        { builtinGlobals: false, hoist: 'functions', allow: [] },
      ],
      'no-undef': 2, // This will now work correctly with defined globals
      'no-unused-vars': 0,
      'object-curly-spacing': [2, 'always'],
      'prettier/prettier': 0,
      'react/jsx-indent': [2, 2],
      'react/jsx-no-bind': 0,
      'react/jsx-no-target-blank': 0,
      'react/jsx-uses-react': 2,
      'react/jsx-uses-vars': 2,
      'react/no-unused-prop-types': 1,
      'react/prop-types': 1,
      semi: [2, 'always'],
      'keyword-spacing': ['error'],
      'arrow-body-style': ['error', 'as-needed'],
      'no-multiple-empty-lines': ['error', { maxEOF: 1, max: 2 }],
      'semi-spacing': 'error',
      'no-multi-spaces': 'error',
      'comma-spacing': [2, { before: false, after: true }],
      'arrow-spacing': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'space-infix-ops': 'error',
      'import/newline-after-import': ['error', { count: 1 }],
      'padded-blocks': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'space-before-blocks': 'error',
      'prefer-const': 1,
      'no-useless-catch': 1,
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-ignore': 'allow-with-description',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    ignores: [
      'node_modules/',
      'public/build/',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.setup.js',
      '**/*.spec.tsx',
      '**/*.config.js',
    ],
  },
];
