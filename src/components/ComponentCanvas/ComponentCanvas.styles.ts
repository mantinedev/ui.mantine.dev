import { createStyles, getStylesRef, rem } from '@mantine/core';

export default createStyles((theme) => ({
  canvas: {
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,

    '&:not(:first-of-type)': {
      marginTop: `calc(${theme.spacing.xl} * 2)`,
    },
  },

  body: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderBottomRightRadius: `calc(${theme.radius.md} - ${rem(1)})`,
    borderBottomLeftRadius: `calc(${theme.radius.md} - ${rem(1)})`,

    [theme.fn.smallerThan('sm')]: {
      padding: 0,
    },
  },

  bodyRaw: {
    padding: 0,

    [`& .${getStylesRef('preview')}`]: {
      padding: rem(4),
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
    },
  },

  bodyWithCode: {
    padding: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  previewDimmed: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  code: {
    borderBottomRightRadius: `calc(${theme.radius.md} - ${rem(1)})`,
    borderBottomLeftRadius: `calc(${theme.radius.md} - ${rem(1)})`,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },

  preview: {
    ref: getStylesRef('preview'),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      padding: theme.spacing.xs,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
    },
  },
}));
