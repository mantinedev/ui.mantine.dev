import { createStyles } from '@mantine/styles';

export const HEADER_HEIGHT = 60;

export default createStyles((theme) => ({
  header: {
    position: 'fixed',
    zIndex: 99,
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3]
    }`,
  },

  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
}));
