import { useState } from 'react';
import { UnstyledButton, Checkbox, Text } from '@mantine/core';
import classes from './CheckboxCard.module.css';

export function CheckboxCard() {
  const [value, onChange] = useState(true);

  return (
    <UnstyledButton onClick={() => onChange(!value)} className={classes.button}>
      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        size="md"
        mr="xl"
        styles={{ input: { cursor: 'pointer' } }}
        aria-hidden
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
