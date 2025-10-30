import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/code-highlight/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: false,
    // @ts-expect-error – storybook throws build error for (a: any, b: any)
    storySort: (a, b) => a.title.localeCompare(b.title, undefined, { numeric: true }),
  },
  backgrounds: { disable: true },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Mantine color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

export const decorators = [
  (renderStory: any, context: any) => {
    const scheme = (context.globals.theme || 'light') as 'light' | 'dark';
    return (
      <MantineProvider forceColorScheme={scheme}>
        <ColorSchemeScript />
        {renderStory()}
      </MantineProvider>
    );
  },
];
