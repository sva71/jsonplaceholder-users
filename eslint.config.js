import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  stylistic.configs['recommended-flat'],
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/padded-blocks': 'off',
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/array-element-newline': 'off',
      '@stylistic/indent': ['warn', 2],
      '@stylistic/block-spacing': ['warn', 'always'],
      '@stylistic/comma-dangle': [
        'warn', {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'never',
          exports: 'never',
          functions: 'never',
        },
      ],
      '@stylistic/object-curly-spacing': ['warn', 'always'],
      '@stylistic/dot-location': ['warn', 'property'],
      '@stylistic/quote-props': 'off',
      '@stylistic/object-property-newline': 'off',
      '@stylistic/space-before-function-paren': 'off',
    },
  },
];
