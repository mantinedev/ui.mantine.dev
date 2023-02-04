import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  header: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    borderTopRightRadius: theme.radius.md,
    borderTopLeftRadius: theme.radius.md,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },

  controls: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: 0,
      flexDirection: 'row-reverse',
    },
  },

  controlLabel: {
    marginLeft: theme.spacing.xs,
  },

  action: {
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    },
  },

  actions: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));
