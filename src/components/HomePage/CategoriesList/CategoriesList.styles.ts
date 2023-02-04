import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    paddingTop: rem(80),
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,

    [`@media (max-width: ${rem(755)})`]: {
      display: 'block',
    },
  },

  title: {
    fontWeight: 500,
    lineHeight: 1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  count: {
    marginLeft: theme.spacing.md,
    marginTop: rem(4),

    [`@media (max-width: ${rem(755)})`]: {
      marginTop: theme.spacing.xs,
      marginLeft: 0,
    },
  },

  group: {
    '& + &': {
      marginTop: `calc(${theme.spacing.xl} * 4)`,
    },
  },
}));
