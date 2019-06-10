/*
  Add linter to the project with some defaults and configs
*/
import { createFile } from './utils/createFile';

import { EverydayContext } from './context';

const sh = require('shelljs');

interface LintConfig {
  prettier: boolean;
  react: boolean;
  lintStaged: boolean;
  typescript: boolean;
}

const getEslintConfig = ({ react, prettier, typescript }: LintConfig) => {
  const config: any = {
    extends: ['eslint:recommended']
      .concat(
        typescript
          ? ['plugin:@typescript-eslint/recommended'].concat(
              prettier ? ['prettier/@typescript-eslint'] : []
            )
          : []
      )
      .concat(react ? ['plugin:react/recommended'] : [])
      .concat(prettier ? [`prettier${react ? '/react' : ''}`] : []),
    settings: {},
    env: {
      browser: true,
      node: true,
      es6: true,
      jest: true,
      worker: true,
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  };

  if (react) {
    config.settings.react = {
      version: 'detect',
    };
  }

  if (typescript) {
    config.parserOptions.extraFileExtensions = ['ts', 'tsx'];
    config.rules['@typescript-eslint/no-explicit-any'] = 'disabled';
    config.rules['@typescript-eslint/no-empty-interface'] = 'disabled';
    config.rules['@typescript-eslint/no-var-requires'] = 'disabled';
  }

  return config;
};

const getPackagesToAdd = ({ prettier, react, lintStaged, typescript }: LintConfig) => {
  return ['eslint']
    .concat(lintStaged ? ['husky', 'lint-staged'] : [])
    .concat(prettier ? ['prettier', 'eslint-plugin-prettier', 'eslint-config-prettier'] : [])
    .concat(react ? ['eslint-plugin-react'] : [])
    .concat(typescript ? ['@typescript-eslint/eslint-plugin', '@typescript-eslint/parser'] : []);
};

const getPrettierConfig = ({ typescript }: LintConfig) => {
  const config: any = {
    printWidth: typescript ? 100 : 80,
    singleQuote: true,
    trailingComma: 'es5',
    tabWidth: 2,
  };

  if (typescript) {
    config.parser = 'typescript';
  }

  return config;
};

export function addLint(ctx: EverydayContext, config: LintConfig) {
  const eslintFilename = '.eslintrc.js';
  const prettierFilename = '.prettierrc';

  if (sh.exec(`yarn add ${getPackagesToAdd(config).join(' ')} --dev`).code !== 0) {
    sh.exit(1);
  }

  createFile(
    eslintFilename,
    ctx.rootPath,
    `module.exports = ${JSON.stringify(getEslintConfig(config), null, 2)}`
  )
    .then(res => {
      console.log(`eslint config created:`, res);
    })
    .catch(err => {
      console.error('eslint config not created:', err);
    });

  if (config.prettier) {
    createFile(prettierFilename, ctx.rootPath, JSON.stringify(getPrettierConfig(config), null, 2))
      .then(res => {
        console.log(`eslint config created:`, res);
      })
      .catch(err => {
        console.error('eslint config not created:', err);
      });
  }
}
