import React from 'react';
import { useMantineColorScheme, SegmentedControl, Group, Center, Box } from '@mantine/core';
import { IconSun as Sun, IconMoon as Moon } from '@tabler/icons';

export function SegmentedToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="xl">
      <SegmentedControl
        value={colorScheme}
        onChange={(value: 'light' | 'dark') => toggleColorScheme(value)}
        data={[
          {
            value: 'light',
            label: (
              <Center>
                <Sun size={16} />
                <Box ml={10}>Light</Box>
              </Center>
            ),
          },
          {
            value: 'dark',
            label: (
              <Center>
                <Moon size={16} />
                <Box ml={10}>Dark</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}
