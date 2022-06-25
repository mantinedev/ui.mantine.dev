import React, { useState } from 'react';
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconLogout as Logout,
  IconHeart as Heart,
  IconStar as Star,
  IconMessage as Message,
  IconSettings as Settings,
  IconPlayerPause as PlayerPause,
  IconTrash as Trash,
  IconSwitchHorizontal as SwitchHorizontal,
  IconChevronDown as ChevronDown,
} from '@tabler/icons';
import { MantineLogo } from '../../shared/MantineLogo';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
    marginBottom: 120,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: 38,
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    },
  },
}));

interface HeaderTabsProps {
  user: { name: string; image: string };
  tabs: string[];
}

export function HeaderTabs({ user, tabs }: HeaderTabsProps) {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <MantineLogo />

          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

          <Menu
            width={260}
            position="bottom-end"
            transition="pop-top-right"
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group spacing={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {user.name}
                  </Text>
                  <ChevronDown size={12} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<Heart size={14} color={theme.colors.red[6]} />}>
                Liked posts
              </Menu.Item>
              <Menu.Item icon={<Star size={14} color={theme.colors.yellow[6]} />}>
                Saved posts
              </Menu.Item>
              <Menu.Item icon={<Message size={14} color={theme.colors.blue[6]} />}>
                Your comments
              </Menu.Item>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item icon={<Settings size={14} />}>Account settings</Menu.Item>
              <Menu.Item icon={<SwitchHorizontal size={14} />}>Change account</Menu.Item>
              <Menu.Item icon={<Logout size={14} />}>Logout</Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item icon={<PlayerPause size={14} />}>Pause subscription</Menu.Item>
              <Menu.Item color="red" icon={<Trash size={14} />}>
                Delete account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
      <Container>
        <Tabs
          defaultValue="Home"
          variant="outline"
          classNames={{
            root: classes.tabs,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}
