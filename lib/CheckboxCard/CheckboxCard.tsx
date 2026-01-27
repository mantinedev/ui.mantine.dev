import { useState } from 'react';
import { Checkbox, Text, UnstyledButton } from '@mantine/core';
import classes from './CheckboxCard.module.css';

export function CheckboxCard() {
  const [value, onChange] = useState(true);

  return (
    <UnstyledButton component="label" className={classes.button}>
      <Checkbox
        checked={value}
        onChange={(event) => onChange(event.currentTarget.checked)}
        size="md"
        mr="xl"
        styles={{ input: { cursor: 'pointer' } }}
      />

      <div>
        <Text fw={500} mb={7} lh={1}>
          @mantine/core
        </Text>
        <Text fz="sm" c="dimmed">
          Core components library: inputs, buttons, overlays, etc.
        </Text>
      </div>
    </UnstyledButton>
  );
}
