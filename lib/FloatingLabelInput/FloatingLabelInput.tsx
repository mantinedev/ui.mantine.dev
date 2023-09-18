import { useState } from 'react';
import { TextInput } from '@mantine/core';
import classes from './FloatingLabelInput.module.css';

export function FloatingLabelInput() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const floating = value.trim().length !== 0 || focused || undefined;

  return (
    <TextInput
      label="Floating label"
      placeholder="OMG, it also has a placeholder"
      required
      classNames={classes}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="md"
      autoComplete="nope"
      data-floating={floating}
      labelProps={{ 'data-floating': floating }}
    />
  );
}
