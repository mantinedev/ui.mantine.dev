import { useState } from 'react';
import Head from 'next/head';
import { MantineThemeProvider, useMantineTheme } from '@mantine/core';
import { getCodeFileIcon } from '@mantinex/dev-icons';
import { CodeHighlightTabs } from '@mantinex/shiki';
import * as UiComponents from '../../lib';
import { ComponentPreview } from '../ComponentPreview/ComponentPreview';
import { ComponentPreviewControls } from '../ComponentPreviewControls/ComponentPreviewControls';
import { UiComponent } from '../../data';

interface ComponentPreviewProps {
  data: UiComponent;
  primaryColor: string;
  component: any;
}

function Preview({ data, primaryColor, component: Component }: ComponentPreviewProps) {
  const theme = useMantineTheme();
  return (
    <div style={{ padding: data.attributes.canvas.maxWidth ? theme.spacing.sm : 0 }}>
      <ComponentPreview
        canvas={data.attributes.canvas}
        withSpacing={!!data.attributes.canvas.maxWidth}
      >
        <MantineThemeProvider theme={{ primaryColor }}>
          <Component {...data.attributes.props} />
        </MantineThemeProvider>
      </ComponentPreview>
    </div>
  );
}

interface ComponentPageProps {
  data: UiComponent;
}

export function ComponentPage({ data }: ComponentPageProps) {
  const [state, setState] = useState('preview');
  const [primaryColor, setPrimaryColor] = useState('blue');

  const title = `${data.attributes.title} | Mantine UI`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta itemProp="name" content={title} key="item-title" />
        <meta property="og:title" content={title} key="og-title" />
        <meta name="twitter:title" content={title} key="twitter-title" />
        <meta
          property="og:url"
          content={`https://ui.mantine.dev/component/${data.slug}`}
          key="og-url"
        />
      </Head>

      <ComponentPreviewControls
        state={state}
        onStateChange={setState}
        primaryColor={primaryColor}
        onPrimaryColorChange={setPrimaryColor}
        {...data}
      />

      {state === 'preview' ? (
        <Preview
          component={UiComponents[data.component as keyof typeof UiComponents]}
          primaryColor={primaryColor}
          data={data}
        />
      ) : (
        <CodeHighlightTabs code={data.code as any} getFileIcon={getCodeFileIcon} />
      )}
    </>
  );
}
