import { Html, Head, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" localStorageKey="mantine-ui-color-scheme" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
