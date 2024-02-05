import React from 'react';
import { useHotkeys } from '@mantine/hooks';
import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';

export function HotKeysHandler() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');
  useHotkeys(
    [['mod + J', () => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')]],
    []
  );
  return <>{null}</>;
}
