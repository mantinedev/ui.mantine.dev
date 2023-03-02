import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
    fontSize: rem(44),
  },
}));
