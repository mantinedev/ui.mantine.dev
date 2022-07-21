import { useState } from 'react';
import Head from 'next/head';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import { Prism } from '@mantine/prism';
import * as UiComponents from '../../../components';
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
        <MantineProvider inherit theme={{ primaryColor }}>
          <Component {...data.attributes.props} />
        </MantineProvider>
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

  return (
    <>
      <Head>
        <title>{`${data.attributes.title} | Mantine UI`}</title>
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
        <Prism language="tsx">{data.code}</Prism>
      )}
    </>
  );
}
