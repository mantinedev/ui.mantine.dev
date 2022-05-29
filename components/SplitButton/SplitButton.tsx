import React from 'react';
import { createStyles, Button, Menu, Group, ActionIcon } from '@mantine/core';
import {
  IconTrash as Trash,
  IconBookmark as Bookmark,
  IconCalendar as Calendar,
  IconChevronDown as ChevronDown,
} from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  button: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  menuControl: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    border: 0,
    borderLeft: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));

export function SplitButton() {
  const { classes, theme } = useStyles();
  const menuIconColor = theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6];

  return (
    <Group noWrap spacing={0}>
      <Button className={classes.button}>Send</Button>
      <Menu transition="pop" position="bottom-end">
        <Menu.Target>
          <ActionIcon
            variant="filled"
            color={theme.primaryColor}
            size={36}
            className={classes.menuControl}
          >
            <ChevronDown size={16} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item icon={<Calendar size={16} color={menuIconColor} />}>
            Schedule for later
          </Menu.Item>
          <Menu.Item icon={<Bookmark size={16} color={menuIconColor} />}>Save draft</Menu.Item>
          <Menu.Item icon={<Trash size={16} color={menuIconColor} />}>Delete</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
