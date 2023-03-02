import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  createEmotionCache,
} from '@mantine/core';
import { useLocalStorage, useHotkeys } from '@mantine/hooks';
import rtlPlugin from 'stylis-plugin-rtl';
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight';
import { useRouter } from 'next/router';
import { DirectionContext } from '../DirectionContext/DirectionContext';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { HEADER_HEIGHT } from './Header/Header.styles';
import { UiComponent } from '../../data';

interface LayoutProps {
  children: React.ReactNode;
  noHeader?: boolean;
  data: UiComponent[];
}

const THEME_KEY = 'mantine-color-scheme';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  prepend: true,
  stylisPlugins: [rtlPlugin],
});

export function Layout({ children, noHeader = false, data }: LayoutProps) {
  const router = useRouter();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const [dir, setDir] = useState<'rtl' | 'ltr'>('ltr');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const toggleDir = () => {
    const nextDir = dir === 'ltr' ? 'rtl' : 'ltr';
    setDir(nextDir);
    document.querySelector('html')!.setAttribute('dir', nextDir);
  };

  useHotkeys([
    ['mod+J', () => toggleColorScheme()],
    ['mod+L', toggleDir],
  ]);

  const actions: SpotlightAction[] = data?.map((item) => ({
    title: item.component,
    description: item.attributes.title,
    onTrigger: () => router.push(`/component/${item.slug}`),
  }));

  return (
    <DirectionContext.Provider value={dir}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{ colorScheme, dir }}
          withGlobalStyles
          withNormalizeCSS
          emotionCache={dir === 'rtl' ? rtlCache : undefined}
        >
          <SpotlightProvider
            actions={actions || []}
            searchIcon={<IconSearch size="1.1rem" />}
            searchPlaceholder="Search components"
            shortcut={['mod + K', 'mod + P', '/']}
            highlightQuery
            zIndex={10000000}
          >
            {!noHeader && <Header toggleDir={toggleDir} dir={dir} />}
            <main style={{ paddingTop: !noHeader ? HEADER_HEIGHT : 0 }}>{children}</main>
            {!noHeader && <Footer />}
          </SpotlightProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </DirectionContext.Provider>
  );
}
