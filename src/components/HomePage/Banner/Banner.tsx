import { IconExternalLink } from '@tabler/icons';
import { GithubIcon } from '@mantine/ds';
import {
  Title,
  Overlay,
  Group,
  Text,
  Button,
  ThemeIcon,
  SimpleGrid,
  Container,
  useMantineTheme,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import data from './data';
import useStyles from './Banner.styles';

interface BannerProps {
  componentsCount: number;
}

export function Banner({ componentsCount }: BannerProps) {
  const { classes, cx } = useStyles();
  const [, scrollTo] = useWindowScroll();
  const theme = useMantineTheme();

  const features = data.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon className={classes.featureIcon} size={44}>
        <feature.icon size={24} stroke={1.5} />
      </ThemeIcon>

      <div className={classes.featureBody}>
        <Text className={classes.featureTitle}>{feature.title}</Text>
        <Text className={classes.featureDescription}>{feature.description}</Text>
      </div>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Container size="xl" px="md">
        <div className={classes.image} />
        <Overlay
          gradient={`linear-gradient(45deg, ${
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
          } 25%, rgba(0, 0, 0, 0) 95%)`}
          opacity={0.5}
          zIndex={1}
        />

        <div className={classes.body}>
          <Text className={classes.supTitle}>Mantine UI</Text>
          <Title className={classes.title}>
            <span className={classes.highlight}>{componentsCount} responsive components</span>
            <br /> built with Mantine
          </Title>

          <Text className={classes.description}>
            Build your next website even faster with premade responsive components designed and
            built by Mantine maintainers and community. All components are free forever for
            everyone.
          </Text>

          <Group className={classes.controls}>
            <Button
              className={cx(classes.control, classes.controlMain)}
              onClick={() => scrollTo({ y: 700 })}
            >
              Browse components
            </Button>
            <Button
              className={cx(classes.control, classes.controlSecondary)}
              leftIcon={<GithubIcon size={16} />}
              component="a"
              href="https://github.com/mantinedev/ui.mantine.dev"
            >
              GitHub
            </Button>
            <Button
              className={cx(classes.control, classes.controlSecondary)}
              rightIcon={<IconExternalLink size={16} stroke={1.5} />}
              component="a"
              href="https://mantine.dev/pages/getting-started/"
            >
              Get started with Mantine
            </Button>
          </Group>

          <SimpleGrid
            cols={3}
            spacing="xl"
            className={classes.features}
            style={{ marginTop: 100 }}
            breakpoints={[{ maxWidth: 755, cols: 1, spacing: 'lg' }]}
          >
            {features}
          </SimpleGrid>
        </div>
      </Container>
    </div>
  );
}
