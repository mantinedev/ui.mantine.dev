import { useState } from 'react';
import { IconColorPicker } from '@tabler/icons-react';
import { ColorSwatch, Group, Popover, useMantineTheme, CheckIcon, rem } from '@mantine/core';

interface ColorControlProps {
  onChange(color: string): void;
  value: string;
}

export function ColorControl({ onChange, value }: ColorControlProps) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const colors = Object.keys(theme.colors).map((color) => ({
    swatch: theme.colors[color][6],
    color,
  }));

  const swatches = colors.map(({ color, swatch }) => (
    <ColorSwatch
      component="button"
      type="button"
      onClick={() => onChange(color)}
      key={color}
      color={swatch}
      size={22}
      style={{ color: theme.white, cursor: 'pointer' }}
    >
      {value === color && <CheckIcon size={10} />}
    </ColorSwatch>
  ));

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      transitionProps={{ duration: 0 }}
      width={152}
      position="bottom-end"
      withArrow
    >
      <Popover.Target>
        <ColorSwatch
          component="button"
          type="button"
          color={theme.colors[value][6]}
          onClick={() => setOpened((o) => !o)}
          size={22}
          style={{ display: 'block', cursor: 'pointer' }}
        >
          <IconColorPicker style={{ width: rem(14), height: rem(14) }} color="#fff" />
        </ColorSwatch>
      </Popover.Target>
      <Popover.Dropdown>
        <Group gap="xs">{swatches}</Group>
      </Popover.Dropdown>
    </Popover>
  );
}
