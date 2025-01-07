import { IconBookmark, IconCalendar, IconChevronDown, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Button, Group, Menu, useMantineTheme } from '@mantine/core';
import classes from './SplitButton.module.css';

export function SplitButton() {
  const theme = useMantineTheme();

  return (
    <Group wrap="nowrap" gap={0}>
      <Button className={classes.button}>Send</Button>
      <Menu transitionProps={{ transition: 'pop' }} position="bottom-end" withinPortal>
        <Menu.Target>
          <ActionIcon
            variant="filled"
            color={theme.primaryColor}
            size={36}
            className={classes.menuControl}
          >
            <IconChevronDown size={16} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={<IconCalendar size={16} stroke={1.5} color={theme.colors.blue[5]} />}
          >
            Schedule for later
          </Menu.Item>
          <Menu.Item
            leftSection={<IconBookmark size={16} stroke={1.5} color={theme.colors.blue[5]} />}
          >
            Save draft
          </Menu.Item>
          <Menu.Item
            leftSection={<IconTrash size={16} stroke={1.5} color={theme.colors.blue[5]} />}
          >
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
