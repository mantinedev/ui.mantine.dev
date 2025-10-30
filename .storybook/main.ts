import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
    enableCrashReports: false,
  },
  stories: ['../lib/**/*.(stories|story).@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-themes'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
};
export default config;
