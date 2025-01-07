import {
  IconCalendar,
  IconChevronDown,
  IconPackage,
  IconSquareCheck,
  IconUsers,
} from '@tabler/icons-react';
import { Button, Menu, Text, useMantineTheme } from '@mantine/core';

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
        <Button rightSection={<IconChevronDown size={18} stroke={1.5} />} pr={12}>
          Create new
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconPackage size={16} color={theme.colors.blue[6]} stroke={1.5} />}
          rightSection={
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">
              Ctrl + P
            </Text>
          }
        >
          Project
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSquareCheck size={16} color={theme.colors.pink[6]} stroke={1.5} />}
          rightSection={
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">
              Ctrl + T
            </Text>
          }
        >
          Task
        </Menu.Item>
        <Menu.Item
          leftSection={<IconUsers size={16} color={theme.colors.cyan[6]} stroke={1.5} />}
          rightSection={
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">
              Ctrl + U
            </Text>
          }
        >
          Team
        </Menu.Item>
        <Menu.Item
          leftSection={<IconCalendar size={16} color={theme.colors.violet[6]} stroke={1.5} />}
          rightSection={
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">
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
