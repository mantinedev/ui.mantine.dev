import {
  createStyles,
  Header,
  Popover,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.black,
    fontSize: theme.fontSizes.sm,

    ...theme.fn.hover({
      backgroundColor: theme.colors.gray[0],
    }),
  },

  subLink: {
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colors.gray[1]}`,
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

export function HeaderMegaMenu() {
  const { classes, theme } = useStyles();
  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" weight={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Header height={60} px="md">
      <Group position="apart" sx={{ height: '100%' }}>
        <MantineLogo size={30} />

        <Group sx={{ height: '100%' }} spacing={0}>
          <a href="#" className={classes.link}>
            Home
          </a>
          <Popover width={600} position="bottom" opened radius="md" shadow="md">
            <Popover.Target>
              <a href="#" className={classes.link}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Features
                  </Box>
                  <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                </Center>
              </a>
            </Popover.Target>

            <Popover.Dropdown sx={{ overflow: 'hidden' }}>
              <Group position="apart" px="md">
                <Text weight={500}>Features</Text>
                <Anchor href="#" size="xs">
                  View all
                </Anchor>
              </Group>

              <Divider my="sm" mx="-md" color="gray.1" />

              <SimpleGrid cols={2} spacing={0}>
                {links}
              </SimpleGrid>

              <div className={classes.dropdownFooter}>
                <Group position="apart">
                  <div>
                    <Text weight={500} size="sm">
                      Get started
                    </Text>
                    <Text size="xs" color="dimmed">
                      Their food sources have decreased, and their numbers
                    </Text>
                  </div>
                  <Button variant="default">Get started</Button>
                </Group>
              </div>
            </Popover.Dropdown>
          </Popover>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>
        </Group>

        <Group>
          <Button variant="default">Log in</Button>
          <Button>Sign up</Button>
        </Group>
      </Group>
    </Header>
  );
}
