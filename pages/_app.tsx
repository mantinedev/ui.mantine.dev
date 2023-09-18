import '../fonts/GreycliffCF/styles.css';
import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/ds/styles.css';
import Head from 'next/head';
import { MantineProvider, DirectionProvider } from '@mantine/core';
import { HotKeysHandler } from '@/components/HotKeysHandler';
import { Search } from '@/components/Search';
import { GaScript } from '@/components/GaScript';
import { theme } from '../theme';

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Mantine UI</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="og:image:width" content="1280" />
        <meta name="og:image:height" content="640" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@mantinedev" />
        <meta
          name="og:image"
          content="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png"
        />
      </Head>
      <GaScript />

      <DirectionProvider initialDirection="ltr" detectDirection={false}>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <HotKeysHandler />
          <Component {...pageProps} />
          <Search data={pageProps.allComponents} />
        </MantineProvider>
      </DirectionProvider>
    </>
  );
}
