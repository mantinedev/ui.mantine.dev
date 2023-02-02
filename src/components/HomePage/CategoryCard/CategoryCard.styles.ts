import { createStyles, getStylesRef } from '@mantine/core';

export default createStyles((theme) => ({
  card: {
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,

    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.025)',
    },
  },

  title: {
    marginTop: theme.spacing.sm,
  },

  description: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginTop: 2,
  },

  imageWrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    minHeight: 154,
  },

  image: {
    ref: getStylesRef('image'),
    transition: 'transform 500ms ease',
  },
}));
