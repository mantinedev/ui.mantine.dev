import { Container, Center, RemoveScroll } from '@mantine/core';
import { openSpotlight } from '@mantine/spotlight';
import { HeaderControls, meta, MantineLogo, ColorSchemeControl } from '@mantine/ds';
import Link from 'next/link';
import useStyles from './Header.styles';

interface HeaderProps {
  toggleDir(): void;
  dir: 'rtl' | 'ltr';
}

export function Header({ toggleDir, dir }: HeaderProps) {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.header, RemoveScroll.classNames.zeroRight)}>
      <Container size="xl" px="md" className={classes.inner}>
        <Link href="/" passHref>
          <Center component="a" sx={(theme) => theme.fn.focusStyles()}>
            <MantineLogo variant="ui.mantine.dev" size={30} />
          </Center>
        </Link>

        <HeaderControls
          sx={(theme) => ({ [theme.fn.smallerThan('sm')]: { display: 'none' } })}
          onSearch={openSpotlight}
          githubLink={meta.gitHubLinks.mantineUi}
          direction={dir}
          toggleDirection={toggleDir}
        />

        <Center sx={(theme) => ({ [theme.fn.largerThan('sm')]: { display: 'none' } })}>
          <ColorSchemeControl />
        </Center>
      </Container>
    </div>
  );
}
