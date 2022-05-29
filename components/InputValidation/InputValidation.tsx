import React from 'react';
import { TextInput, createStyles } from '@mantine/core';
import { IconAlertTriangle as AlertTriangle } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  invalid: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors.red[8], 0.15) : theme.colors.red[0],
  },

  icon: {
    color: theme.colors.red[theme.colorScheme === 'dark' ? 7 : 6],
  },
}));

export function InputValidation() {
  const { classes } = useStyles();
  return (
    <TextInput
      label="Custom validation styles"
      error="Invalid email"
      defaultValue="hello!gmail.com"
      classNames={{ input: classes.invalid }}
      rightSection={<AlertTriangle size={16} className={classes.icon} />}
    />
  );
}
