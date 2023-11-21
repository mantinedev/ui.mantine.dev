import Link from 'next/link';
import { AppShell, Container, RemoveScroll, Group } from '@mantine/core';
import { ColorSchemeControl, HeaderControls, SearchMobileControl } from '@mantinex/mantine-header';
import { MantineLogo } from '@mantinex/mantine-logo';
import { meta } from '@mantinex/mantine-meta';
import { searchHandlers } from '../Search';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="xl" px="md" className={classes.inner}>
          <Link href="/" className="mantine-focus-auto">
            <MantineLogo variant="ui.mantine.dev" size={30} />
          </Link>

          <HeaderControls
            visibleFrom="sm"
            onSearch={searchHandlers.open}
            githubLink={meta.gitHubLinks.mantineUi}
            withDirectionToggle={false}
            discordLink={meta.discordLink}
          />

          <Group hiddenFrom="sm">
            <SearchMobileControl onSearch={searchHandlers.open} />
            <ColorSchemeControl />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <div className={classes.main}>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}
