import { Button, Menu, Group, ActionIcon, rem, useMantineTheme } from '@mantine/core';
import { IconTrash, IconBookmark, IconCalendar, IconChevronDown } from '@tabler/icons-react';
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
            <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={
              <IconCalendar
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
                color={theme.colors.blue[5]}
              />
            }
          >
            Schedule for later
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconBookmark
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
                color={theme.colors.blue[5]}
              />
            }
          >
            Save draft
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconTrash
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
                color={theme.colors.blue[5]}
              />
            }
          >
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
