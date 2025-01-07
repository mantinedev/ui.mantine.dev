import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../lib/**/*.(stories|story).@(js|jsx|ts|tsx)'],
  addons: ['storybook-dark-mode', '@storybook/addon-styling-webpack'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
};
export default config;
