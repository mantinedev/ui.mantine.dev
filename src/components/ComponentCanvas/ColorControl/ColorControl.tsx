import { useState } from 'react';
import { IconColorPicker } from '@tabler/icons';
import { ColorSwatch, Group, Popover, useMantineTheme, CheckIcon } from '@mantine/core';

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
      {value === color && <CheckIcon width={10} />}
    </ColorSwatch>
  ));

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      transitionDuration={0}
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
          <IconColorPicker size={14} color="#fff" />
        </ColorSwatch>
      </Popover.Target>
      <Popover.Dropdown>
        <Group spacing="xs">{swatches}</Group>
      </Popover.Dropdown>
    </Popover>
  );
}
