import { TextInput, rem } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';
import classes from './InputValidation.module.css';

export function InputValidation() {
  return (
    <TextInput
      label="Custom validation styles"
      error="Invalid email"
      defaultValue="hello!gmail.com"
      classNames={{ input: classes.invalid }}
      rightSection={
        <IconAlertTriangle
          stroke={1.5}
          style={{ width: rem(18), height: rem(18) }}
          className={classes.icon}
        />
      }
    />
  );
}
