import { createStyles, Switch, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  body: {
    display: 'flex',
    alignItems: 'center',
  },

  track: {
    width: 40,
    height: 6,
    overflow: 'visible',
  },

  thumb: {
    width: 20,
    height: 20,
    left: -2,
    transition: 'background-color 100ms ease, left 100ms ease',

    'input:checked + * > &': {
      backgroundColor: theme.fn.primaryColor(),
    },
  },
}));

export function CustomSwitch() {
  const { classes } = useStyles();
  return (
    <Group position="center" p="md">
      <Switch label="Custom Switch" classNames={classes} />
    </Group>
  );
}
