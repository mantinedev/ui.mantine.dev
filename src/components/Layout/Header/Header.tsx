import React from 'react';
import { Container } from '@mantine/core';
import { HeaderControls, meta, MantineLogo } from '@mantine/ds';
import useStyles from './Header.styles';

interface HeaderProps {
  toggleDir(): void;
  dir: 'rtl' | 'ltr';
}

export function Header({ toggleDir, dir }: HeaderProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.header}>
      <Container size="xl" px="md" className={classes.inner}>
        <MantineLogo variant="ui.mantine.dev" size={30} />
        <HeaderControls
          onSearch={() => {}}
          githubLink={meta.gitHubLinks.mantineUi}
          direction={dir}
          toggleDirection={toggleDir}
        />
      </Container>
    </div>
  );
}
