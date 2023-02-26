import { Button, Menu, Text, useMantineTheme } from '@mantine/core';
import {
  IconSquareCheck,
  IconPackage,
  IconUsers,
  IconCalendar,
  IconChevronDown,
} from '@tabler/icons-react';

export function ButtonMenu() {
  const theme = useMantineTheme();
  return (
    <Menu
      transitionProps={{ transition: 'pop-top-right' }}
      position="top-end"
      width={220}
      withinPortal
    >
      <Menu.Target>
        <Button rightIcon={<IconChevronDown size="1.05rem" stroke={1.5} />} pr={12}>
          Create new
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          icon={<IconPackage size="1rem" color={theme.colors.blue[6]} stroke={1.5} />}
          rightSection={
            <Text size="xs" transform="uppercase" weight={700} color="dimmed">
              Ctrl + P
            </Text>
          }
        >
          Project
        </Menu.Item>
        <Menu.Item
          icon={<IconSquareCheck size="1rem" color={theme.colors.pink[6]} stroke={1.5} />}
          rightSection={
            <Text size="xs" transform="uppercase" weight={700} color="dimmed">
              Ctrl + T
            </Text>
          }
        >
          Task
        </Menu.Item>
        <Menu.Item
          icon={<IconUsers size="1rem" color={theme.colors.cyan[6]} stroke={1.5} />}
          rightSection={
            <Text size="xs" transform="uppercase" weight={700} color="dimmed">
              Ctrl + U
            </Text>
          }
        >
          Team
        </Menu.Item>
        <Menu.Item
          icon={<IconCalendar size="1rem" color={theme.colors.violet[6]} stroke={1.5} />}
          rightSection={
            <Text size="xs" transform="uppercase" weight={700} color="dimmed">
              Ctrl + E
            </Text>
          }
        >
          Event
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
