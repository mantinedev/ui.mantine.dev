import { IconChevronDown } from '@tabler/icons-react';
import {
  Burger,
  Center,
  Collapse,
  Container,
  Divider,
  Drawer,
  Group,
  Menu,
  ScrollArea,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderMenu.module.css';

const links = [
  { link: '/about', label: 'Features' },
  {
    link: '#1',
    label: 'Learn',
    links: [
      { link: '/docs', label: 'Documentation' },
      { link: '/resources', label: 'Resources' },
      { link: '/community', label: 'Community' },
      { link: '/blog', label: 'Blog' },
    ],
  },
  { link: '/about', label: 'About' },
  { link: '/pricing', label: 'Pricing' },
  {
    link: '#2',
    label: 'Support',
    links: [
      { link: '/faq', label: 'FAQ' },
      { link: '/demo', label: 'Book a demo' },
      { link: '/forums', label: 'Forums' },
    ],
  },
];

export function HeaderMenu() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <MantineLogo size={28} />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
        </div>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />
          {links.map((link) => {
            if (link.links) {
              return (
                <DrawerLinksGroup key={link.label} link={link} />
              );
            }

            return (
              <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                {link.label}
              </a>
            );
          })}
        </ScrollArea>
      </Drawer>
    </header>
  );
}

function DrawerLinksGroup({ link }: { link: { link: string; label: string; links?: { link: string; label: string }[] } }) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <UnstyledButton className={classes.link} onClick={toggle}>
        <Center inline>
          <span className={classes.linkLabel}>{link.label}</span>
          <IconChevronDown size={14} stroke={1.5} />
        </Center>
      </UnstyledButton>
      <Collapse expanded={opened}>
        {link.links?.map((subLink) => (
          <a
            key={subLink.link}
            href={subLink.link}
            className={classes.subLink}
            onClick={(event) => event.preventDefault()}
          >
            {subLink.label}
          </a>
        ))}
      </Collapse>
    </>
  );
}
