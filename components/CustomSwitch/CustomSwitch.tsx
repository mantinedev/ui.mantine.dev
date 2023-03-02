import { createStyles, Switch, Group, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  body: {
    display: 'flex',
    alignItems: 'center',
  },

  track: {
    width: rem(40),
    height: rem(6),
    overflow: 'visible',
  },

  thumb: {
    width: rem(20),
    height: rem(20),
    left: rem(-2),
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
