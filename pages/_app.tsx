import '../fonts/GreycliffCF/styles.css';
import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/ds/styles.css';
import Head from 'next/head';
import { MantineProvider, DirectionProvider } from '@mantine/core';
import { HotKeysHandler } from '@/components/HotKeysHandler';
import { theme } from '../theme';

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <DirectionProvider initialDirection="ltr" detectDirection={false}>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <HotKeysHandler />
          <Component {...pageProps} />
        </MantineProvider>
      </DirectionProvider>
    </>
  );
}
