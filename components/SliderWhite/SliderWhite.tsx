import { createStyles, Slider, rem } from '@mantine/core';
import { IconGripHorizontal } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  thumb: {
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[3]
    }`,
    width: rem(28),
    height: rem(22),
    color: theme.colors.gray[5],
    backgroundColor: theme.white,
    borderRadius: theme.radius.sm,
  },
}));

export function SliderWhite() {
  const { classes } = useStyles();
  return (
    <Slider
      classNames={classes}
      thumbChildren={<IconGripHorizontal size="1.2rem" stroke={1.5} />}
      defaultValue={40}
      label={null}
    />
  );
}
