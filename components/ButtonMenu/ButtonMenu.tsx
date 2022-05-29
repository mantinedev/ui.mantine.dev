import React from 'react';
import { Button, Menu, Text, useMantineTheme } from '@mantine/core';
import {
  IconSquareCheck as SquareCheck,
  IconPackage as Package,
  IconUsers as Users,
  IconCalendar as Calendar,
  IconChevronDown as ChevronDown,
} from '@tabler/icons';

export function ButtonMenu() {
  const theme = useMantineTheme();
  return (
    <Menu transition="pop-top-right" position="top-end" width={220}>
      <Menu.Target>
        <Button rightIcon={<ChevronDown size={18} />} pr={12}>
          Create new
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          icon={<Package size={16} color={theme.colors.blue[6]} />}
          rightSection={
            <Text size="xs" transform="uppercase" weight={700} color="dimmed">
              Ctrl + P
            </Text>
          }
        >
          Project
        </Menu.Item>
        <Menu.Item
          icon={<SquareCheck size={16} color={theme.colors.pink[6]} />}
          rightSection={
            <Text size="xs" transform="uppercase" weight={700} color="dimmed">
              Ctrl + T
            </Text>
          }
        >
          Task
        </Menu.Item>
        <Menu.Item
          icon={<Users size={16} color={theme.colors.cyan[6]} />}
          rightSection={
            <Text size="xs" transform="uppercase" weight={700} color="dimmed">
              Ctrl + U
            </Text>
          }
        >
          Team
        </Menu.Item>
        <Menu.Item
          icon={<Calendar size={16} color={theme.colors.violet[6]} />}
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
